import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import AboutUs from './components/AboutUs';
import { products } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="pt-16">
        <AboutUs />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestros Productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>© 2024 TiendaX. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;