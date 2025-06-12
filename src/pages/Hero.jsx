import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          👋 Welcome to the Ultimate Debate Zone
        </h1>

        <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto">
          Here, you’ll finally find answers to your biggest questions.
          Whether it’s tech, sports, food or lifestyle — the community helps decide.
        </p>

        <p className="text-md sm:text-lg text-purple-200 max-w-2xl mx-auto">
          📊 Vote. 💬 Discuss. 🔥 Decide once and for all.
        </p>

        <ul className="grid sm:grid-cols-2 gap-4 mt-8">
          {[
            '📱 iPhone vs Android',
            '⚽ Messi vs Ronaldo',
            '🍕 Pizza vs Sushi',
            '🎮 PlayStation vs Xbox',
            '🐱 Cats vs Dogs',
            '🥶 Winter vs Summer'
          ].map((debate, idx) => (
            <li
              key={idx}
              className="bg-white/10 hover:bg-white/20 transition-colors duration-200 rounded-xl px-6 py-4 text-base font-medium shadow-lg backdrop-blur"
            >
              {debate}
            </li>
          ))}
        </ul>
      </div>

      {/* 5 Debate Cards */}
<div className="mt-24 max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-6">
  {[
    {
      image: 'https://i.pinimg.com/736x/08/d2/ae/08d2ae6167fadd0de12b64f272ac4eba.jpg',
      text: '🕷️ Which Spider-Man is the best?',
      subtext: 'Tobey, Andrew, or Tom?',
      votes: 3200,
    },
    {
      image: 'https://i.pinimg.com/736x/4f/17/24/4f1724bfd897aa35758959705a3c1d36.jpg',
      text: '🦇 Best Batman of all time?',
      subtext: 'Christian Bale vs Robert Pattinson',
      votes: 2800,
    },
    {
      image: 'https://i.pinimg.com/736x/e6/c0/1a/e6c01a1e3e212ed2d268b35b6d5350f0.jpg',
      text: '⚽ Ronaldo or Messi?',
      subtext: 'The eternal debate 🔥',
      votes: 4500,
    },
    {
      image: 'https://i.pinimg.com/736x/ae/6a/e6/ae6ae654eb904d4d8ba31ff022f3a6dc.jpg',
      text: '🍔 Fast food vs Homemade?',
      subtext: 'Taste or health?',
      votes: 1700,
    },
    {
      image: 'https://i.pinimg.com/736x/5c/f2/b9/5cf2b9651165973b0502912b8aa0cb9f.jpg',
      text: '🧠 Books vs Movies?',
      subtext: 'What’s more immersive?',
      votes: 2300,
    },
  ].map((card, idx) => (
    <div
      key={idx}
      className="bg-gradient-to-br from-purple-700/50 to-indigo-700/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.04] transition-transform duration-300 group"
    >
      <img
        src={card.image}
        alt={card.text}
        className="w-full h-44 object-cover group-hover:opacity-90 transition-opacity duration-300"
      />
      <div className="p-4 text-white flex flex-col justify-between h-[160px]">
        <div>
          <h3 className="font-bold text-base mb-1">{card.text}</h3>
          <p className="text-sm text-gray-300">{card.subtext}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-400">{card.votes} votes</span>
          <Link to="/articles">
          <button className="bg-white text-indigo-700 font-semibold text-xs px-3 py-1 rounded-full hover:bg-indigo-100 transition">
            Vote
          </button>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default Hero;
