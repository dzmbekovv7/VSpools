import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import Loading from '../components/Loading';
import './Article.css';

const AshleyArticleDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [otherArticles, setOtherArticles] = useState([]);
  const [prevArticle, setPrevArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
const fetchTypes = async () => {
  const { data, error } = await supabase
    .from('vspolls_articles')
    .select('type')
    .neq('type', null) // если хочешь исключить null
    .limit(1000); // или по необходимости

  if (!error && data) {
    const uniqueTypes = [...new Set(data.map(article => article.type))];
    console.log('Unique types:', uniqueTypes);
  } else {
    console.error(error);
  }
};

useEffect(() => {
  fetchTypes();
}, []);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('vspolls_articles').select('*');

      if (!error && data) {
        const found = data.find((a) => slugify(a.title) === slug);
        if (found) {
          setArticle(found);

          // Сортируем по дате публикации
          const sorted = data.sort(
            (a, b) => new Date(a.published_date) - new Date(b.published_date)
          );
          const currentIndex = sorted.findIndex((a) => slugify(a.title) === slug);

          setPrevArticle(sorted[currentIndex - 1] || null);
          setNextArticle(sorted[currentIndex + 1] || null);

          // Берём до 6 других статей, исключая текущую
          const others = data
            .filter((a) => slugify(a.title) !== slug)
            .sort((a, b) => new Date(b.published_date) - new Date(a.published_date)) // последние сверху
            .slice(0, 6);
          setOtherArticles(others);
        } else {
          setArticle(null);
        }
      }
      setLoading(false);
    };

    fetchArticle();
  }, [slug]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !article) return;

    const newComment = {
      name,
      message,
      created_at: new Date().toISOString(),
    };

    const updatedComments = article.comments
      ? [...article.comments, newComment]
      : [newComment];

    const { error } = await supabase
      .from('vspolls_articles')
      .update({ comments: updatedComments })
      .eq('id', article.id);

    if (!error) {
      setArticle((prev) => ({ ...prev, comments: updatedComments }));
      setName('');
      setMessage('');
    }
  };

  if (loading) return <Loading />;
  if (!article) return <p className="text-center text-white text-xl mt-20">Article not found</p>;

  function addClassToLinks(html) {
    if (!html) return "";
    return html.replace(/<a /g, '<a class="custom-link text-indigo-600 hover:underline" ');
  }

  const customMarkdown = (content) => {
    if (!content) return "";
    let html = content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/\[(.*?)\]\((.*?)\)/g, `<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`)
      .replace(/<img>(.*?)<\/img>/g, '<img src="$1" class="rounded-lg shadow-md my-4 w-full object-cover" />')
      .split('\n')
      .map(line => line.trim() === '' ? '<br/>' : `<p class="mb-3 leading-relaxed text-gray-700">${line}</p>`)
      .join('');
    return addClassToLinks(html);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 to-purple-900 py-12 px-4 sm:px-10 text-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

        {/* Основной контент статьи */}
        <div className="lg:w-2/3 bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-8 shadow-xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-72 object-cover rounded-lg mb-6 shadow-lg"
          />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <img src={article.avatar} alt={article.author} className="w-12 h-12 rounded-full" />
            <span>{article.author}</span>
            <span>•</span>
            <span>{new Date(article.published_date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{article.reading_time} read</span>
          </div>

          <div
            className="prose max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: customMarkdown(article.content) }}
          />

        <div className="flex justify-between mt-12 mb-12">
  {prevArticle ? (
    <button
      onClick={() => navigate(`/articles/${slugify(prevArticle.title)}`)}
      className="flex items-center gap-3 px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition max-w-[45%] shadow-lg"
    >
      <span className="text-xl font-bold">←</span>
      <div className="text-left truncate">
        <div className="font-semibold">{prevArticle.title.length > 30 ? prevArticle.title.slice(0, 30) + '...' : prevArticle.title}</div>
        <div className="text-xs opacity-80">{prevArticle.author}</div>
        <div className="text-xs opacity-70">{new Date(prevArticle.published_date).toLocaleDateString()}</div>
        <div className="text-xs italic text-gray-200 truncate max-w-full mt-1">
          {prevArticle.content ? prevArticle.content.slice(0, 60).replace(/\n/g, ' ') + '...' : ''}
        </div>
      </div>
    </button>
  ) : <div />}

  {nextArticle ? (
    <button
      onClick={() => navigate(`/articles/${slugify(nextArticle.title)}`)}
      className="flex items-center gap-3 px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition max-w-[45%] shadow-lg"
    >
      <div className="text-right truncate">
        <div className="font-semibold">{nextArticle.title.length > 30 ? nextArticle.title.slice(0, 30) + '...' : nextArticle.title}</div>
        <div className="text-xs opacity-80">{nextArticle.author}</div>
        <div className="text-xs opacity-70">{new Date(nextArticle.published_date).toLocaleDateString()}</div>
        <div className="text-xs italic text-gray-200 truncate max-w-full mt-1">
          {nextArticle.content ? nextArticle.content.slice(0, 60).replace(/\n/g, ' ') + '...' : ''}
        </div>
      </div>
      <span className="text-xl font-bold">→</span>
    </button>
  ) : <div />}
</div>


          {/* Комментарии и форма */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Discussion</h2>
            <form
              onSubmit={handleCommentSubmit}
              className="bg-gray-100 rounded-xl p-6 space-y-4 shadow-md"
            >
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                placeholder="Your message..."
                rows="4"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Post Comment
              </button>
            </form>

            <div className="mt-8 space-y-6 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-100">
              {article.comments && article.comments.length > 0 ? (
                article.comments.slice().reverse().map((comment, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <div className="font-semibold text-gray-800">{comment.name}</div>
                    <p className="text-gray-700 mt-1">{comment.message}</p>
                    <div className="text-xs text-gray-500 mt-2">
                      {new Date(comment.created_at).toLocaleString()}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 italic">Be the first to comment!</p>
              )}
            </div>
          </div>
        </div>

        {/* Сайдбар */}
        <aside className="lg:w-1/3 space-y-8">
          <section>
            <h2 className="text-white text-3xl font-semibold mb-6 border-b border-indigo-400 pb-2">Latest Updates</h2>
            <div className="space-y-4 max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-indigo-100 rounded-md">
              {otherArticles.map((a) => (
                <Link
                  key={a.id}
                  to={`/articles/${slugify(a.title)}`}
                  className="flex gap-4 bg-white bg-opacity-90 backdrop-blur-md rounded-lg p-3 hover:shadow-xl transition shadow-md items-center"
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-gray-900 font-semibold line-clamp-2">{a.title}</h4>
                    <span className="text-gray-600 text-sm">{new Date(a.published_date).toLocaleDateString()}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t border-indigo-400 pt-8">
            <h2 className="text-2xl font-extrabold text-indigo-300 mb-6 text-center tracking-wide uppercase">
              Keywords
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'VS-Battles',
                'Who won?',
                'The best of the best',
                'Editorial opinion',
              ].map((keyword) => (
                <Link
                  key={keyword}
                  to={`/type/${encodeURIComponent(keyword)}`}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white font-medium rounded-full hover:from-indigo-500 hover:to-indigo-700 transition-all duration-300 shadow-md"
                >
                  {keyword}
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default AshleyArticleDetailPage;
