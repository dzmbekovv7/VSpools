import React from "react";
import { 
  MessageCircle, 
  Users, 
  Zap, 
  Headphones, 
  ThumbsUp 
} from "lucide-react";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Alex Storm",
    role: "Chief Debater",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sasha Flame",
    role: "Community Manager",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Jordan Blaze",
    role: "Tech Lead",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Maya Phoenix",
    role: "Content Creator",
    img: "https://randomuser.me/api/portraits/women/54.jpg",
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 min-h-screen text-white font-sans overflow-x-hidden">

      {/* Hero Section */}
      <section className="text-center py-28 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
          Welcome to <span className="text-yellow-300">VSpools</span> — The Arena of Ideas
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Where voices clash, minds expand, and the best arguments rise.  
          Join thousands of thinkers debating the hottest topics worldwide.
        </p>
        <Link to="/debates" className="inline-block bg-yellow-400 text-indigo-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
          Jump Into The Debate
        </Link>
      </section>

      {/* Features / Why VSpools */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 px-6 mb-28">
        {[
          {
            Icon: Zap,
            title: "Electric Debates",
            desc: "Feel the energy of real-time discussions that spark new ideas.",
          },
          {
            Icon: MessageCircle,
            title: "Open Forums",
            desc: "Create, join, and moderate discussions on any topic imaginable.",
          },
          {
            Icon: Headphones,
            title: "Hear All Sides",
            desc: "Listen to diverse perspectives and engage respectfully with the community.",
          },
        ].map(({ Icon, title, desc }) => (
          <div key={title} className="bg-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/20 transition cursor-default shadow-lg">
            <Icon className="w-14 h-14 text-yellow-300 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-yellow-100 font-light leading-relaxed">{desc}</p>
          </div>
        ))}
      </section>

      {/* Team Section */}
      <section className="bg-white/10 py-20 px-6 rounded-t-3xl shadow-inner max-w-7xl mx-auto mb-28">
        <h2 className="text-4xl font-bold text-center text-yellow-300 mb-12 tracking-wide">Meet The VSpools Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {team.map(({ name, role, img }) => (
            <div key={name} className="bg-white/20 rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition cursor-pointer group">
              <img
                src={img}
                alt={name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-yellow-300 group-hover:scale-110 transform transition"
              />
              <h3 className="text-xl font-semibold text-yellow-300 mb-1">{name}</h3>
              <p className="text-yellow-200 font-light">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Call to Action */}
      <section className="text-center max-w-4xl mx-auto mb-32 px-6">
        <Users className="mx-auto mb-5 w-12 h-12 text-yellow-300" />
        <h2 className="text-4xl font-extrabold text-yellow-300 mb-5">Join Our Debate Community</h2>
        <p className="mb-8 text-yellow-100 leading-relaxed text-lg">
          Connect with thousands of passionate debaters worldwide. Share your opinions, challenge ideas, and grow your influence.
        </p>
        <Link to="/register" className="inline-block bg-yellow-400 text-indigo-900 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
          Sign Up Now
        </Link>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-3xl mx-auto mb-32 px-6">
        <h2 className="text-3xl font-bold text-yellow-300 mb-10 text-center">Our Journey So Far</h2>
        <ul className="border-l-4 border-yellow-300 pl-6 space-y-8 text-yellow-100 font-light text-lg">
          <li>
            <strong className="text-yellow-400">2019:</strong> Conceptualized the idea of a debate-focused social platform.
          </li>
          <li>
            <strong className="text-yellow-400">2020:</strong> Launched VSpools Beta, welcoming our first 1,000 users.
          </li>
          <li>
            <strong className="text-yellow-400">2022:</strong> Added live debate streams and voting features.
          </li>
          <li>
            <strong className="text-yellow-400">2024:</strong> Expanded to international languages & topics, 50k+ active users.
          </li>
          <li>
            <strong className="text-yellow-400">Today:</strong> Continuing to innovate and empower thoughtful discourse globally.
          </li>
        </ul>
      </section>

      {/* Footer Quote */}
      <section className="bg-white/10 py-16 px-6 text-center italic text-yellow-200 max-w-3xl mx-auto rounded-3xl shadow-inner mb-20">
        <p className="text-lg">
          “The strength of an argument lies not in loudness, but in respect, logic, and passion.” — VSpools
        </p>
      </section>

    </div>
  );
};

export default About;
