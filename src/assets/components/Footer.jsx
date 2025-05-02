import React from 'react'
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white">About Me</h2>
          <p className="mt-3 text-sm text-gray-400">
            I'm Aman Sahni, a passionate Web Developer skilled in JavaScript, React, and Tailwind CSS. 
            I create modern and responsive websites with a focus on user experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li className="hover:text-blue-500 transition duration-300"><Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
            <li className="hover:text-blue-500 transition duration-300"><Link to="services" smooth={true} duration={500} className="cursor-pointer">Services</Link></li>
            <li className="hover:text-blue-500 transition duration-300"><Link to="aboutMe" smooth={true} duration={300} className="cursor-pointer">About me</Link></li>
            <li className="hover:text-blue-500 transition duration-300"><Link to="skills" smooth={true} duration={200} className="cursor-pointer">Skills</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-sm text-gray-400">Email: aman.sahni052001@gmail.com
          </p>
          <p className="text-sm text-gray-400">Phone: +91 98777 43918</p>
          <p className="text-sm text-gray-400">Location: India</p>
        </div>

      </div>

      {/* Social Media Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Aman Sahni. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/aman-sahni-05" target='_blank' className="hover:text-blue-500 transition duration-300"><i className="fab fa-github text-xl"></i></a>
          <a href="https://www.linkedin.com/in/aman-sahni-a6a231353" target='_blank' className="hover:text-blue-500 transition duration-300"><i className="fab fa-linkedin text-xl"></i></a>
          <a href="https://www.instagram.com/its.___aman__/" target='_blank' className="hover:text-blue-500 transition duration-300"><i className="fab fa-instagram text-xl"></i></a>
        </div>
      </div>
      
    </footer>
  );
}
