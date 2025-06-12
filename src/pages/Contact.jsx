import React from "react";
import ContactForm from "../components/ContactForm";
import { UserCheck, Vote, MessageCircleMore, Mail, PhoneCall, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-white tracking-tight">
          Let the People Decide 🔥
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          At <span className="text-red-500 font-semibold">vspools</span>, we fuel the most exciting showdowns. Have a match idea, a partnership request, or just a crazy comparison? Let’s talk!
        </p>
      </section>

   {/* Showdown Cards */}
<section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
  {[
    {
      title: "🏆 Messi vs Ronaldo",
      description: "The eternal football debate. Who truly reigns supreme?",
      image:
        "https://i.pinimg.com/736x/d1/39/76/d1397674636d3fd0b78ce6485dbc322d.jpg",
      gradient: "from-red-600 via-red-500 to-orange-500",
      textColor: "text-white",
      buttonTextColor: "text-black",
      buttonBg: "bg-white hover:bg-gray-200",
    },
    {
      title: "🗳️ Trump vs Putin",
      description:
        "Two global icons. Politics, power, and personality collide.",
      image:
        "https://i.pinimg.com/736x/e0/58/b0/e058b0e5a71fc3c52fba80c118622047.jpg",
      gradient: "from-blue-700 via-blue-600 to-purple-500",
      textColor: "text-white",
      buttonTextColor: "text-black",
      buttonBg: "bg-white hover:bg-gray-200",
    },
    {
      title: "⚔️ iPhone vs Android",
      description: "Which one dominates your pocket and your heart?",
      image:
        "https://i.pinimg.com/736x/4c/2c/67/4c2c67ec89f193ec465ca84b6ac09cb1.jpg",
      gradient: "from-green-600 via-lime-500 to-yellow-400",
      textColor: "text-black",
      buttonTextColor: "text-white",
      buttonBg: "bg-black hover:bg-gray-900",
    },
  ].map((card, index) => (
    <div
      key={index}
      className={`bg-gradient-to-br ${card.gradient} rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300`}
    >
      <div className="h-60 w-full overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6 flex flex-col justify-between h-60">
        <h2 className={`text-xl md:text-2xl font-bold mb-2 ${card.textColor}`}>
          {card.title}
        </h2>
        <p className={`text-sm ${card.textColor} mb-4`}>{card.description}</p>
        <button
          className={`${card.buttonBg} ${card.buttonTextColor} font-semibold py-2 px-4 rounded-full w-fit`}
        >
          Cast Your Vote
        </button>
      </div>
    </div>
  ))}
</section>

      {/* Contact Section */}
      <section className="bg-gray-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageCircleMore className="w-6 h-6 text-red-500" />
              Let’s Collaborate
            </h2>
            <p className="text-gray-400 mb-4">
              Have an idea for a poll? Want to partner up or offer sponsorship? We’d love to hear from you.
            </p>
            <ContactForm />
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-800 p-6 rounded-xl flex items-center gap-4">
              <Mail className="w-6 h-6 text-red-400" />
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-lg font-medium text-white">contact@vspools.com</div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl flex items-center gap-4">
              <PhoneCall className="w-6 h-6 text-green-400" />
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="text-lg font-medium text-white">+1 (234) 567-8900</div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <div>
                <div className="text-sm text-gray-400">Location</div>
                <div className="text-lg font-medium text-white">VS HQ, Debate Avenue, NY</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
