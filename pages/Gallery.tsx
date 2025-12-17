import React from 'react';

const Gallery: React.FC = () => {
  // Simulating a gallery with placeholder images
  const images = [
    'https://www.akfabrics.com/img/elements/g18.jpg',
    'https://www.akfabrics.com/img/elements/g7.jpg',
    'https://www.akfabrics.com/img/elements/g1.jpg',
    'https://www.akfabrics.com/img/elements/g12.jpg',
    'https://www.akfabrics.com/img/elements/g2.jpg',
    'https://www.akfabrics.com/img/elements/g15.jpg',
    'https://www.akfabrics.com/img/elements/g6.jpg',
    'https://www.akfabrics.com/img/elements/g4.jpg',
    'https://www.akfabrics.com/img/elements/g10.jpg',
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Gallery</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A glimpse into our textures, colors, and manufacturing facility.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md">
              <img 
                src={src} 
                alt={`Gallery item ${index + 1}`} 
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-wide px-4 py-2 border border-white rounded">KVK TEX</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
