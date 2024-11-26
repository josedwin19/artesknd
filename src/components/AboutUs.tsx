import React from 'react';
import { Target, Heart, Star } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nuestra Historia</h2>
          <p className="mt-4 text-lg text-gray-600">
            Desde 2015, Artisanías KND ha sido un puente entre los talentosos artesanos peruanos y el mundo, 
            llevando la rica tradición artesanal del Perú a hogares de todo el país.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="bg-emerald-600 inline-block p-3 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Nuestra Historia</h3>
              <p className="mt-2 text-gray-600">
                Comenzamos como una pequeña tienda en el corazón de Cusco, trabajando directamente con 
                artesanos locales. Hoy nos enorgullece ser un referente en la preservación y promoción 
                del arte tradicional peruano.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="bg-emerald-600 inline-block p-3 rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Nuestra Misión</h3>
              <p className="mt-2 text-gray-600">
                Preservar y promover el rico patrimonio artesanal del Perú, apoyando a los artesanos 
                locales y llevando sus creaciones únicas a un público global, mientras mantenemos vivas 
                las técnicas ancestrales.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="bg-emerald-600 inline-block p-3 rounded-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Nuestra Visión</h3>
              <p className="mt-2 text-gray-600">
                Ser reconocidos globalmente como el principal exponente de la artesanía peruana, 
                creando oportunidades sostenibles para los artesanos y preservando nuestra herencia 
                cultural para las futuras generaciones.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-emerald-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white">Nuestros Valores</h3>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="text-xl font-semibold text-white">Autenticidad</h4>
              <p className="mt-2 text-white/90">Preservando técnicas ancestrales</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="text-xl font-semibold text-white">Sostenibilidad</h4>
              <p className="mt-2 text-white/90">Apoyando a comunidades artesanas</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="text-xl font-semibold text-white">Tradición</h4>
              <p className="mt-2 text-white/90">Honrando nuestra herencia cultural</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}