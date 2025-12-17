import React from 'react';
import { MessageCircle } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 'pique',
      name: 'Pique with Collar Yarn',
      description: 'Premium quality Pique fabric available in Single and Double textures. Ideal for uniforms and casual wear with excellent durability and breathability.',
      specs: [
        { label: 'Pattern', value: 'Single Pique / Double Pique' },
        { label: 'Type', value: 'Biowash / Non Biowash' },
        { label: 'Yarn Type', value: 'Semi Combed / Combed' },
        { label: 'Composition', value: '100% Cotton / 60-40 Poly / 80-20 Poly / Yarn Dyed' },
        { label: 'GSM', value: '225 / 245' },
        { label: 'Counts', value: "25'S" },
        { label: 'Width', value: '34" (Tubular)' },
        { label: 'Used For', value: 'T-Shirts / School Uniforms / Shorts' },
        { label: 'Colors', value: 'Available in 42 Shades' },
      ],
      image: 'https://www.akfabrics.com/img/p1.jpg'
    },
    {
      id: 'jersey',
      name: 'Jersey with Lycra Rib',
      description: 'Versatile Single Jersey fabric offering superior comfort and stretch. Perfect for casual shirts and bermuda shorts.',
      specs: [
        { label: 'Pattern', value: 'Single Jersey' },
        { label: 'Type', value: 'Biowash / Non Biowash' },
        { label: 'Yarn Type', value: 'Semi Combed / Combed' },
        { label: 'Composition', value: '100% Cotton / 60-40 Poly / 80-20 Poly / Spandex' },
        { label: 'GSM', value: '160 / 180 / 200' },
        { label: 'Counts', value: "20'S / 24'S / 30'S" },
        { label: 'Width', value: '32" / 33"' },
        { label: 'Used For', value: 'Casual Shirts / Bermuda Shorts' },
        { label: 'Colors', value: 'Available in 24 Shades' },
      ],
      image: 'https://www.akfabrics.com/img/p2.jpg'
    },
    {
      id: 'french-terry',
      name: 'French Terry with Lycra Derby',
      description: 'High-quality French Terry fabric designed for sportswear and hoodies. Features a loop back structure for moisture absorption.',
      specs: [
        { label: 'Pattern', value: 'No - Raising' },
        { label: 'Type', value: 'Non Biowash' },
        { label: 'Yarn Type', value: 'Semi Combed' },
        { label: 'Composition', value: '100% Cotton / 80% Cotton - 20% Polyester' },
        { label: 'GSM', value: '250 / 280' },
        { label: 'Counts', value: "25'S" },
        { label: 'Width', value: '35" (Tubular)' },
        { label: 'Used For', value: 'Sports / Sweat Shirt / Track Pants / Hoodies' },
        { label: 'Colors', value: 'Available in 16 Shades' },
      ],
      image: 'https://www.akfabrics.com/img/p3.jpg'
    },
    {
      id: 'fleece',
      name: 'Fleece with Lycra Derby',
      description: 'Warm and insulating Fleece fabric with one-side raising. The ultimate choice for winter wear and heavy activewear.',
      specs: [
        { label: 'Pattern', value: 'One side Raising' },
        { label: 'Type', value: 'Non Biowash' },
        { label: 'Yarn Type', value: 'Semi Combed' },
        { label: 'Composition', value: '100% Cotton / 80% Cotton - 20% Polyester' },
        { label: 'GSM', value: '300 / 340 / 400' },
        { label: 'Counts', value: "20'S" },
        { label: 'Width', value: '34" (Tubular)' },
        { label: 'Used For', value: 'Sports / Sweat Shirt / Track Pants / Hoodies' },
        { label: 'Colors', value: 'Available in 17 Shades' },
      ],
      image: 'https://www.akfabrics.com/img/p3.jpg'
    }
  ];

  const handleWhatsApp = (productName: string) => {
    const message = `Hi, I am interested in ${productName}. Can you provide more details?`;
    window.open(`https://wa.me/918344496674?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-8 pb-20 bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Our Products</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality knitted fabrics designed for fashion, comfort, and durability.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              id={product.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-100`}
            >
              <div className="w-full lg:w-5/12 overflow-hidden rounded-xl shadow-md h-[400px]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full lg:w-7/12 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">{product.name}</h2>
                    <button 
                        onClick={() => handleWhatsApp(product.name)}
                        className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full hover:bg-green-600 transition-all text-sm font-medium shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transform hover:-translate-y-0.5"
                    >
                        <MessageCircle size={18} />
                        Live Whatsapp Chat
                    </button>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {product.description}
                </p>
                
                <div className="bg-slate-50 rounded-lg border border-slate-100 overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 text-sm">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className={`p-4 border-b border-slate-200 ${idx % 2 === 0 ? 'sm:border-r' : ''} last:border-b-0 hover:bg-white transition-colors`}>
                        <span className="block text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">{spec.label}</span>
                        <span className="block text-slate-900 font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;