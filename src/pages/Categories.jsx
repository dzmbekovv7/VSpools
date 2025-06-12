import React, { useEffect, useState } from 'react';
import { Heart, Moon, Sparkles, Rocket } from 'lucide-react';
import { supabase } from '../supabase';
import { useNavigate, Link } from 'react-router-dom';

const categories = [
  { name: 'Romantic', icon: <Heart className="w-8 h-8 text-pink-500" /> },
  { name: 'Mystery', icon: <Moon className="w-8 h-8 text-purple-600" /> },
  { name: 'Fantasy', icon: <Sparkles className="w-8 h-8 text-indigo-500" /> },
  { name: 'Sci-Fi', icon: <Rocket className="w-8 h-8 text-blue-600" /> },
];

const Categories = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // добавил состояние для ошибки
  const navigate = useNavigate();

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
      }
      setArticles(data || []);
    }
    setLoading(false);
  };

  fetchArticles();
}, []);


  const handleCategoryClick = (categoryName) => {
    navigate(`/articles?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-blue-800 mb-2 font-serif italic">
          Popular Categories
        </h3>
        <p className="text-gray-600 mb-10">
          Choose your next journey through genres that ignite your imagination.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">

        {loading && <p className="text-center text-gray-600">Loading articles...</p>}

        {error && <p className="text-center text-red-600">Error: {error}</p>}

        {!loading && !error && articles.length === 0 && (
          <p className="text-center text-gray-600">No articles found.</p>
        )}
{!loading && !error && articles.length > 0 && (
  <div className="space-y-12 px-4 md:px-8 lg:px-12">
    {Array.from({ length: Math.ceil(articles.length / 3) }).map((_, groupIndex) => {
      const group = articles.slice(groupIndex * 3, groupIndex * 3 + 3);
      const bigIndex = Math.floor(Math.random() * group.length);
      const bigArticle = group[bigIndex];
      const smallArticles = group.filter((_, i) => i !== bigIndex);

      return (
        <div
          key={`group-${groupIndex}`}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Большая карточка */}
          <Link
            to="/articles"
            key={bigArticle.id}
            className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col bg-white h-full"
          >
            <img
              src={bigArticle.image || '/default-image.jpg'}
              alt={bigArticle.title}
              className="w-full h-64 md:h-[60%] object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">{bigArticle.title}</h2>
              <p className="text-gray-700 text-base mb-4 line-clamp-4 flex-grow">{bigArticle.summary}</p>
              <div className="text-sm text-gray-500 mt-auto">
                🕒 {bigArticle.reading_time} min read • 📅 {new Date(bigArticle.published_date).toLocaleDateString()}
              </div>
            </div>
          </Link>

          {/* Маленькие карточки */}
          <div className="flex flex-col gap-6">
            {smallArticles.map((article) => (
              <Link
                to="/articles"
                key={article.id}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col bg-white"
              >
                <img
                  src={article.image || '/default-image.jpg'}
                  alt={article.title}
                  className="w-full h-24 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{article.summary}</p>
                  <div className="text-xs text-gray-500 mt-auto">
                    🕒 {article.reading_time} min • 📅 {new Date(article.published_date).toLocaleDateString()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    })}

    {/* Show more button вынесена из карточек */}
    <div className="text-center mt-12">
      <button
        onClick={() => navigate('/articles')}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition duration-300 shadow-lg hover:shadow-xl"
      >
        Show more
      </button>
    </div>
  </div>
)}

      </div>

      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-300 opacity-30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Categories;
