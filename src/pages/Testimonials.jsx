import React from 'react';
import { MessageCircle } from 'lucide-react';

const debates = [
  {
    name: "Alihanka",
    text: "Without a doubt, Messi outplays Ronaldo in creativity and vision!",
  },
  {
    name: "Ali",
    text: "Android all the way! iPhone users just don’t get true customization.",
  },
  {
    name: "Zara",
    text: "Spider-Man by Tom Holland is the best because of his humor and relatability!",
  },
  {
    name: "Rina",
    text: "Fast food beats homemade any day for quick satisfaction, no debates!",
  },
  {
    name: "Leo",
    text: "Books will always triumph over movies — imagination is irreplaceable.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-800 to-purple-900 py-20 text-white overflow-hidden">
      {/* Заголовок */}
      <h3 className="text-4xl font-extrabold mb-12 italic font-serif text-center tracking-wide drop-shadow-lg">
        🔥 VSpools Debate Highlights
      </h3>

      {/* Комментарии */}
      <div className="flex flex-wrap justify-center gap-8 px-6 max-w-6xl mx-auto">
        {debates.map((d, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg border border-purple-400 rounded-3xl p-6 max-w-sm shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <MessageCircle className="w-10 h-10 text-purple-300 mx-auto mb-4 animate-pulse" />
            <p className="italic text-purple-100 mb-4 text-lg leading-relaxed">"{d.text}"</p>
            <p className="font-semibold text-purple-300 text-right">— {d.name}</p>
          </div>
        ))}
      </div>

      {/* Декор */}
      <MessageCircle className="absolute top-8 left-8 text-purple-500 opacity-10 w-24 h-24 rotate-[25deg]" />
      <MessageCircle className="absolute bottom-12 right-12 text-indigo-500 opacity-10 w-28 h-28 -rotate-12" />
    </section>
  );
};

export default Testimonials;
