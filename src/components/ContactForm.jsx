import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const vsBattles = [
  { id: 1, left: "Messi", right: "Ronaldo", imageLeft: "/messi.jpg", imageRight: "/ronaldo.jpg" },
  { id: 2, left: "Trump", right: "Putin", imageLeft: "/trump.jpg", imageRight: "/putin.jpg" },
  { id: 3, left: "iOS", right: "Android", imageLeft: "/ios.png", imageRight: "/android.png" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-10">🔥 VSPools — Choose Your Side</h1>

      {/* Contact Form */}
      <div className="max-w-xl mx-auto bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">📬 Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white hover:brightness-110 transition"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactForm;
