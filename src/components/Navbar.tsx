import React, { useState } from 'react';
import { Search, Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/artesaniasknd',
      icon: Instagram
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/artesaniasknd',
      icon: Facebook
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@artesaniasknd',
      icon: Youtube // Using Youtube icon as TikTok isn't available in lucide-react
    }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
            <div className="flex items-center ml-4">
              <Logo />
              <h1 className="text-2xl font-bold text-emerald-600 ml-2">Artesanías KND</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600">Inicio</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600">Sobre Nosotros</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600">Artesanías</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600">Contacto</a>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
            <Search className="h-6 w-6 text-gray-600 cursor-pointer hover:text-emerald-600" />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md">Inicio</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md">Sobre Nosotros</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md">Artesanías</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md">Contacto</a>
            <div className="flex space-x-4 px-3 py-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}