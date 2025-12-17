import React from 'react';
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Truck, Droplet, Zap, Award, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://www.akfabrics.com/img/header-bg.jpg" 
            alt="Fabric texture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight leading-tight">
            Weaving Excellence <br /> into Every Thread
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto font-light">
            KVK TEX is a premier fabric manufacturer in Tirupur, dedicated to producing high-quality Pique, Jersey, French Terry, and Fleece fabrics for the global market.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="px-8 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
              View Products <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-white text-slate-900 font-medium rounded hover:bg-slate-100 transition-all shadow-lg flex items-center justify-center">
              Contact Us
            </Link>
          </div> */}
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Premium Quality</h3>
              <p className="text-slate-600 leading-relaxed">
                Rigorous quality control processes ensure every yard of fabric meets international standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <Factory size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Modern Manufacturing</h3>
              <p className="text-slate-600 leading-relaxed">
                State-of-the-art machinery in Tirupur allowing for diverse fabric textures and high-volume production.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Timely Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                Committed to meeting deadlines with efficient logistics and supply chain management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">Product Features</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <img src="https://www.akfabrics.com/img/c1.jpg" alt="Fabric Manufacturing" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Fabric Manufacturing</h3>
            </div>
            <div className="text-center">
              <div className="h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <img src="https://www.akfabrics.com/img/c2.jpg" alt="Custom Solutions" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Custom Solutions</h3>
            </div>
            <div className="text-center">
              <div className="h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <img src="https://www.akfabrics.com/img/c3.jpg" alt="Bulk Production" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Bulk Production</h3>
            </div>
            <div className="text-center">
              <div className="h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <img src="https://www.akfabrics.com/img/c4.jpg" alt="Quality Assurance" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Quality Assurance</h3>
            </div>
            <div className="text-center">
              <div className="h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <img src="https://www.akfabrics.com/img/c5.jpg" alt="Technical Support" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Technical Support</h3>
            </div>
            <div className="text-center">
              <div className="h-48 rounded-lg overflow-hidden mb-4 shadow-lg">
                <img src="https://www.akfabrics.com/img/c6.jpg" alt="Sustainable Practices" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Sustainable Practices</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Our Specialties</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">Fabric Categories</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Pique', img: 'https://www.akfabrics.com/img/t1.jpg', desc: 'Durable, breathable textured fabric ideal for polo shirts.' },
              { name: 'Jersey', img: 'https://www.akfabrics.com/img/t2.jpg', desc: 'Soft, stretchy knit fabric perfect for t-shirts and comfort wear.' },
              { name: 'French Terry', img: 'https://www.akfabrics.com/img/t3.jpg', desc: 'Mid-weight fabric with loops on one side, great for sweatshirts.' },
              { name: 'Fleece', img: 'https://www.akfabrics.com/img/t4.jpg', desc: 'Soft, insulating synthetic wool for warmth and comfort.' },
            ].map((item, idx) => (
              <Link to="/products" key={idx} className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/4] cursor-pointer block">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold mb-2 font-serif">{item.name}</h3>
                  <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              Explore All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brief About */}
      <section className="bg-slate-9 text-black py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
             <img 
              src="https://images.unsplash.com/photo-1675176785803-bffbbb0cd2f4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4dGlsZSUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D" 
              alt="Textile machine" 
              className="rounded-lg shadow-2xl opacity-90 max-h-[300px] max-w-[400px] object-cover"
             />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">About KVK TEX</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Located in Tirupur, the knitwear capital of India, KVK TEX has established itself as a reliable partner for high-quality fabrics. We combine traditional textile knowledge with modern manufacturing techniques to deliver superior products.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-500" /> <span>Specialized in bulk manufacturing</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-500" /> <span>Custom fabric solutions</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-500" /> <span>Sustainable practices</span>
              </li>
            </ul>
            <Link to="/about" className="inline-block px-6 py-3 border border-white rounded hover:bg-white hover:text-slate-900 transition-all mt-4">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
