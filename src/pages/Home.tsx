import React from 'react';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';
import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="pt-16">
        <AboutUs />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestras Categorías</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}