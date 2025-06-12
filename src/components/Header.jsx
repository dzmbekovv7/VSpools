import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white px-6 py-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <BookOpen className="w-7 h-7 text-white" />
          <h1 className="text-3xl font-extrabold">VSPools</h1>
        </div>
        <h2 className="text-lg font-medium italic tracking-wide mb-6">Who is better?</h2>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center flex-wrap gap-6 text-lg">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/articles" className="hover:underline">Blog</Link>
   
          <Link to="/reviews" className="hover:underline">Testimonials</Link>
          <Link to="/privacy" className="hover:underline">Privacy</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden mt-4">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 text-base">
            <Link to="/" className="block">Home</Link>
            <Link to="/articles" className="block">Blog</Link>
            <Link to="/reviews" className="block">Testimonials</Link>
            <Link to="/privacy" className="block">Privacy</Link>
            <Link to="/contact" className="block">Contact</Link>
            <Link to="/about" className="block">About</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
