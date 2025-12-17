import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Get to know the passion and precision behind KVK TEX.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Company Overview */}
        <div className="max-w-4xl mx-auto space-y-8 mb-20">
          <h2 className="text-3xl font-serif font-bold text-slate-900 border-l-4 border-blue-600 pl-4">Our Story</h2>
          <div className="prose prose-lg text-slate-600">
            <p>
              KVK TEX is a distinguished name in the textile industry, situated in Tirupur, globally renowned as the knitwear hub of India. Since our inception, we have been committed to producing fabrics that not only meet but exceed customer expectations.
            </p>
            <p>
              We specialize in manufacturing a wide variety of knitted fabrics including Pique, Jersey, French Terry, and Fleece. Our strategic location in Elango Nagar allows us access to the best raw materials and skilled workforce, ensuring that every roll of fabric leaving our facility is of premium quality.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
             <img 
               src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop" 
               alt="Fabric production" 
               className="rounded-lg shadow-xl"
             />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Our Manufacturing Process</h2>
            <p className="text-slate-600 leading-relaxed">
              At KVK TEX, we manage the end-to-end process of fabric creation. From sourcing high-grade yarn to knitting and quality assurance, our workflow is designed for efficiency and excellence.
            </p>
            <div className="space-y-4">
               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shrink-0">01</div>
                 <div>
                   <h4 className="text-lg font-bold text-slate-900">Yarn Sourcing</h4>
                   <p className="text-slate-600 text-sm">Selecting the finest cotton and synthetic blends.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shrink-0">02</div>
                 <div>
                   <h4 className="text-lg font-bold text-slate-900">Knitting</h4>
                   <p className="text-slate-600 text-sm">Using advanced circular knitting machines for various structures.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold shrink-0">03</div>
                 <div>
                   <h4 className="text-lg font-bold text-slate-900">Quality Check</h4>
                   <p className="text-slate-600 text-sm">Rigorous inspection for GSM, color fastness, and shrinkage.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;