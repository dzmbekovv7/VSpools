import React from 'react';
import { Book, Globe, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Book className="w-12 h-12 text-purple-400" />,
    title: 'Massive Debate Library',
    desc: 'Thousands of topics spanning every interest and passion, ready for your arguments.',
  },
  {
    icon: <Globe className="w-12 h-12 text-purple-400" />,
    title: 'Global Voices',
    desc: 'Join debates and discussions with people from every corner of the world.',
  },
  {
    icon: <HeartHandshake className="w-12 h-12 text-purple-400" />,
    title: 'Community Powered',
    desc: 'Engage with a lively, passionate community that thrives on real talk and respect.',
  },
];

const Features = () => (
  <section className="py-20 mt-[20px] px-6 max-w-6xl mx-auto bg-gradient-to-r from-indigo-800 to-purple-900 rounded-3xl text-white shadow-lg">
    <h3 className="text-4xl font-extrabold  text-center mb-16 font-serif tracking-wide drop-shadow-md">
      Why Join VSpools?
    </h3>
    <div className="grid gap-16 md:grid-cols-3 text-center">
      {features.map(({ icon, title, desc }, idx) => (
        <div
          key={idx}
          className="p-8 bg-white/10 rounded-2xl shadow-lg hover:bg-white/20 transition duration-300 cursor-default"
        >
          <div className="mb-6 mx-auto">{icon}</div>
          <h4 className="text-2xl font-semibold mb-4">{title}</h4>
          <p className="text-purple-200 leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
