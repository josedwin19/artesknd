import React from 'react';

export default function Logo() {
  return (
    <div className="w-12 h-12 relative">
      <img 
        src="/logo.png" 
        alt="Artesanías KND Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}