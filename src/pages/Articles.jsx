import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { Search, Clock, Star } from 'lucide-react';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const AshleyArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('newest');

useEffect(() => {
  const fetchArticles = async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from('vspolls_articles')
      .select('*')
      .order('published_date', { ascending: false })
      .limit(6);

    if (error) {
      setError(error.message);
      setArticles([]);
    } else {
      console.log('Полученные статьи:', data);
      if (data && data.length > 0) {
        console.log('Поля первой статьи:', Object.keys(data[0]));
        console.log('URL изображения первой статьи:', data[0]?.image);

      }
      setArticles(data || []);
    }
    setLoading(false);
  };

  fetchArticles();
}, []);
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

  const filteredArticles = articles
    .filter((a) => a.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (filter === 'newest') return new Date(b.published_date) - new Date(a.published_date);
      if (filter === 'oldest') return new Date(a.published_date) - new Date(b.published_date);
      if (filter === 'popular') return b.reading_time - a.reading_time;
      return 0;
    });
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-900 via-indigo-900 to-black text-white font-['Poppins']">

      <main className="max-w-7xl mx-auto px-4 ">
        {/* Search & Filter */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-14">
          <div className="relative w-full md:w-1/2 mt-[20px] mx-auto group">
            <div className="flex items-center bg-white rounded-full shadow-xl px-5 py-3 ring-1 ring-indigo-400 focus-within:ring-4 focus-within:ring-indigo-600 transition">
              <Search className="text-indigo-600 mr-3" />
              <input
                type="search"
                aria-label="Search articles"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow bg-transparent text-gray-900 placeholder-indigo-400 focus:outline-none text-base font-medium"
              />
              {searchTerm && (
                <button
                  aria-label="Clear search"
                  onClick={() => setSearchTerm('')}
                  className="text-indigo-500 hover:text-red-600 font-bold text-xl transition"
                >
                  &times;
                </button>
              )}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            {[
              { id: 'newest', label: 'Newest', icon: <Clock size={18} /> },
              { id: 'oldest', label: 'Oldest', icon: <Clock size={18} className="rotate-180" /> },
              { id: 'popular', label: 'Popular', icon: <Star size={18} /> },
            ].map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setFilter(id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition ${
                  filter === id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg'
                    : 'bg-indigo-900/50 hover:bg-indigo-700/80 text-indigo-300 hover:text-white'
                }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </section>

  {loading ? (
  <Loading />
) : error ? (
  <p className="text-center text-red-500 text-lg">{error}</p>
) : filteredArticles.length === 0 ? (
  <p className="text-center text-indigo-400 text-lg mt-20">No articles found.</p>
) : (
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8 lg:px-12">
    {filteredArticles.slice(0, visibleCount).map((article) => {
      // Подставим дефолтную фотку, если нет image
      const imageSrc = article.image 

      return (
        <Link
          key={article.id}
          to={`/articles/${slugify(article.title)}`}
          className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
        >
          <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-t-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 brightness-90"
  
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <h2 className="text-white text-lg md:text-xl font-bold line-clamp-2">
                {article.title}
              </h2>
            </div>
          </div>

          <div className="p-5 flex flex-col justify-between h-[280px] md:h-[320px] bg-gradient-to-b from-indigo-50 to-white">
            <p className="text-gray-700 text-sm md:text-base mb-4 line-clamp-5 font-light">
              {article.summary || 'No summary available.'}
            </p>

            <div className="flex justify-between items-center text-gray-500 text-xs md:text-sm mb-5 font-mono">
              <span>🕒 {article.reading_time || '?'} read</span>
              <time dateTime={article.published_date}>
                📅 {new Date(article.published_date).toLocaleDateString()}
              </time>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={article.avatar || 'https://i.pravatar.cc/40'}
                alt={article.author || 'Author'}
                className="w-10 h-10 rounded-full border-2 border-indigo-300 shadow-sm"
                onError={(e) => (e.currentTarget.src = 'https://i.pravatar.cc/40')}
              />
              <span className="text-gray-900 font-semibold">{article.author || 'Unknown Author'}</span>
            </div>

            <details className="group-open:animate-fadeIn text-gray-600">
              <summary className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-900 select-none">
                Read Full Content ▼
              </summary>
              <article className="mt-3 max-h-36 overflow-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-indigo-100 px-2 text-sm leading-relaxed whitespace-pre-line">
                {article.content || 'Full content is not available.'}
              </article>
            </details>
          </div>
        </Link>
      );
    })}
  </section>
)}

        {/* Show More */}
        {visibleCount < filteredArticles.length && !loading && (
          <div className="mt-16 text-center">
            <button
              onClick={handleShowMore}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-full font-bold text-lg shadow-xl hover:scale-105 transform transition"
            >
              Load More Articles
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AshleyArticlesPage;
