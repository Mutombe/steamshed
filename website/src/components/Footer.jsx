import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoDiamondSharp } from "react-icons/io5";
import logo from '../assets/images/logo.png';

const Footer = () => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/mining', label: 'Mining Ops' },
    { path: '/jewelry', label: 'Wholesale Jewelry' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'Our Story' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#050505] text-white pt-20 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
               <img src={logo} alt="Stream Shed" className="h-12 w-auto rounded-sm" />
               <span className="font-['Playfair_Display'] text-2xl font-bold text-white">Stream Shed</span>
            </Link>
            <p className="font-['Cormorant_Garamond'] text-gray-400 text-lg leading-relaxed">
              Premier mining and jewelry wholesaler in Zimbabwe. Bridging the gap between earth's raw treasures and refined elegance.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/stream_shed" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm text-[#D4AF37] mb-6">Explore</h4>
            <ul className="space-y-4 font-['Cormorant_Garamond'] text-lg text-gray-400">
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm text-[#D4AF37] mb-6">Contact</h4>
            <ul className="space-y-6 font-['Cormorant_Garamond'] text-lg text-gray-400">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-[#D4AF37]" />
                <span>62 Birmingham Rd,<br/>Southerton, Harare</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhone className="text-[#D4AF37]" />
                <a href="tel:+263777684929" className="hover:text-white transition-colors">+263 77 768 4929</a>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-[#D4AF37]" />
                <a href="mailto:munasheharrison@gmail.com" className="hover:text-white transition-colors">munasheharrison@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm text-[#D4AF37] mb-6">Availability</h4>
            <div className="bg-[#111] p-6 border border-white/5 rounded-sm">
                <div className="flex items-center gap-3 mb-2 text-white">
                    <IoDiamondSharp className="text-[#D4AF37]" />
                    <span className="font-bold">Always Open</span>
                </div>
                <p className="text-gray-400 text-sm">
                    Our support team is available 24/7 to assist with wholesale inquiries.
                </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-['Cormorant_Garamond']">
          <p>© {new Date().getFullYear()} Stream Shed. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#D4AF37] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;