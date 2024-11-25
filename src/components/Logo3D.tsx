import React from 'react';

export default function Logo3D() {
  return (
    <div className="logo-3d-container">
      <div className="logo-3d">A</div>
      <style jsx>{`
        .logo-3d-container {
          perspective: 1000px;
          width: 40px;
          height: 40px;
          display: inline-block;
        }
        
        .logo-3d {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 8px;
          transform: rotateX(20deg) rotateY(-20deg);
          transform-style: preserve-3d;
          box-shadow: 
            5px 5px 20px rgba(16, 185, 129, 0.2),
            -5px -5px 20px rgba(16, 185, 129, 0.2);
          animation: float 3s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .logo-3d:hover {
          transform: rotateX(25deg) rotateY(-25deg) scale(1.1);
        }

        @keyframes float {
          0%, 100% {
            transform: rotateX(20deg) rotateY(-20deg) translateY(0);
          }
          50% {
            transform: rotateX(25deg) rotateY(-25deg) translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
}