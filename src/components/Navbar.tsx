import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, ShoppingBag } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';
import { categories } from '../data/categories';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
      icon: TikTokIcon
    }
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-emerald-50 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-emerald-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-emerald-600" />
              ) : (
                <Menu className="h-6 w-6 text-emerald-600" />
              )}
            </button>
            <Link to="/" className="flex items-center ml-2 group">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="h-8 w-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                <div>
                  <h1 className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                    Artesanías KND
                  </h1>
                  <p className="text-xs text-emerald-500">Artesanía Peruana Auténtica</p>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${
                isActiveLink('/') 
                  ? 'text-emerald-600 font-semibold' 
                  : 'text-gray-600 hover:text-emerald-600'
              } transition-colors`}
            >
              Inicio
            </Link>
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/categoria/${category.id}`}
                className={`${
                  isActiveLink(`/categoria/${category.id}`)
                    ? 'text-emerald-600 font-semibold'
                    : 'text-gray-600 hover:text-emerald-600'
                } transition-colors`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Social Links and Search */}
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-4">
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
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-emerald-50 border-t border-emerald-100">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md ${
                isActiveLink('/') 
                  ? 'bg-emerald-100 text-emerald-600 font-semibold' 
                  : 'text-gray-600 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/categoria/${category.id}`}
                className={`block px-3 py-2 rounded-md ${
                  isActiveLink(`/categoria/${category.id}`)
                    ? 'bg-emerald-100 text-emerald-600 font-semibold'
                    : 'text-gray-600 hover:bg-emerald-100 hover:text-emerald-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
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