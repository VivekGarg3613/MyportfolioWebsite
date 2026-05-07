import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Vivek Garg</h2>
          <p className="text-sm">
            Frontend Developer building modern React applications with clean UI and responsive design.
          </p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><NavLink href="/" className="hover:text-white">Home</NavLink></li>
            <li><NavLink href="/projects" className="hover:text-white">Projects</NavLink></li>
            <li><NavLink href="/contact" className="hover:text-white">Contact</NavLink></li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Connect</h2>
          <div className="flex gap-4 text-sm">
            <NavLink href="#" className="hover:text-white">LinkedIn</NavLink>
            <NavLink href="#" className="hover:text-white">GitHub</NavLink>
            <NavLink href="#" className="hover:text-white">Email</NavLink>
          </div>
        </div>

      </div>
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} Vivek Garg. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

