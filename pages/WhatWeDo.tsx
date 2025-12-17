import React from 'react';
import { Feather, Heart, Maximize, Wind, Ruler, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatWeDo: React.FC = () => {
  const services = [
    {
      icon: <Feather size={32} />,
      title: "Fabric Manufacturing",
      desc: "Premium quality Pique, Jersey, French Terry, and Fleece fabrics manufactured with precision and care.",
      image: "https://www.akfabrics.com/img/c1.jpg"
    },
    {
      icon: <Heart size={32} />,
      title: "Custom Solutions",
      desc: "Tailored fabric solutions to meet your specific requirements and design specifications.",
      image: "https://www.akfabrics.com/img/c2.jpg"
    },
    {
      icon: <Maximize size={32} />,
      title: "Bulk Production",
      desc: "Large-scale manufacturing capabilities to fulfill orders of any size with consistent quality.",
      image: "https://www.akfabrics.com/img/c3.jpg"
    },
    {
      icon: <Wind size={32} />,
      title: "Quality Assurance",
      desc: "Rigorous testing and quality control processes ensuring every fabric meets international standards.",
      image: "https://www.akfabrics.com/img/c4.jpg"
    },
    {
      icon: <Ruler size={32} />,
      title: "Technical Support",
      desc: "Expert guidance on fabric selection, specifications, and application for your projects.",
      image: "https://www.akfabrics.com/img/c5.jpg"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Sustainable Practices",
      desc: "Eco-friendly manufacturing processes that prioritize environmental responsibility.",
      image: "https://www.akfabrics.com/img/c6.jpg"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">What We Do</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Comprehensive fabric manufacturing services designed to meet the diverse needs of the global textile industry.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">Complete Fabric Solutions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">From Concept to Creation</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your fabric requirements and specifications" },
              { step: "02", title: "Design", desc: "Creating samples and prototypes for your approval" },
              { step: "03", title: "Production", desc: "Manufacturing with precision using advanced machinery" },
              { step: "04", title: "Delivery", desc: "Quality control and timely delivery to your location" }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your fabric requirements and create something exceptional together.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;