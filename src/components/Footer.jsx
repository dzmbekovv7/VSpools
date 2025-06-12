import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-12 px-6 ">
      {/* Header slogan */}
      <h2 className="text-center text-3xl font-extrabold mb-6">
        Who’s Better? VSpools vs Everyone!
      </h2>

      {/* Navigation links */}
      <ul className="flex flex-wrap justify-center gap-8 text-base font-medium mb-8">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Blog", path: "/articles" },
          { name: "Testimonials", path: "/reviews" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="transition-all duration-300 hover:underline hover:text-gray-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      
    </footer>
  );
};

export default Footer;
