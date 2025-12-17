import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronDown, MessageCircle, Twitter } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductDropdownOpen(false);
  };

  const isActive = (path: string) => location.pathname === path ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-blue-600";

  return (
    <div className="flex flex-col min-h-screen font-sans relative">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> +91 83444 96674</span>
            <span className="flex items-center gap-2"><Mail size={14} /> kvktextpr@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="opacity-75">Quality Fabrics Since 2024</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex flex-col group" onClick={closeMenu}>
              <span className="text-2xl font-serif font-bold tracking-tight text-slate-900 group-hover:text-blue-800 transition-colors">KVK TEX</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500">Tirupur</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`transition-colors duration-200 ${isActive('/')}`}>Home</Link>
              <Link to="/about" className={`transition-colors duration-200 ${isActive('/about')}`}>About Us</Link>
              <Link to="/what-we-do" className={`transition-colors duration-200 ${isActive('/what-we-do')}`}>What We Do</Link>
              
              <div className="relative group">
                <button className={`flex items-center gap-1 transition-colors duration-200 ${location.pathname.includes('/products') ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-blue-600"}`}>
                  Our Products <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <Link to="/products" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">All Products</Link>
                  <hr className="my-1 border-slate-100" />
                  <Link to="/products#pique" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">Pique</Link>
                  <Link to="/products#jersey" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">Jersey Fabrics</Link>
                  <Link to="/products#french-terry" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">French Terry</Link>
                  <Link to="/products#fleece" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600">Fleece</Link>
                </div>
              </div>

              <Link to="/gallery" className={`transition-colors duration-200 ${isActive('/gallery')}`}>Gallery</Link>
              <Link to="/contact" className="px-5 py-2.5 bg-slate-900 text-white rounded hover:bg-blue-800 transition-all duration-300 shadow-lg shadow-blue-900/20 text-sm font-medium">Contact Us</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-slate-600" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col p-4 space-y-4">
            <Link to="/" className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100" onClick={closeMenu}>About Us</Link>
            <Link to="/what-we-do" className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100" onClick={closeMenu}>What We Do</Link>
            
            <div>
              <button 
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                className="flex items-center justify-between w-full text-lg font-medium text-slate-800 py-2 border-b border-slate-100"
              >
                Our Products <ChevronDown size={16} className={`transform transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-4 space-y-2 mt-2 ${isProductDropdownOpen ? 'block' : 'hidden'}`}>
                 <Link to="/products" className="block text-slate-600 py-1" onClick={closeMenu}>All Products</Link>
                 <Link to="/products" className="block text-slate-600 py-1" onClick={closeMenu}>Pique</Link>
                 <Link to="/products" className="block text-slate-600 py-1" onClick={closeMenu}>Jersey Fabrics</Link>
                 <Link to="/products" className="block text-slate-600 py-1" onClick={closeMenu}>French Terry</Link>
                 <Link to="/products" className="block text-slate-600 py-1" onClick={closeMenu}>Fleece</Link>
              </div>
            </div>

            <Link to="/gallery" className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100" onClick={closeMenu}>Gallery</Link>
            <Link to="/contact" className="text-lg font-medium text-blue-600 py-2" onClick={closeMenu}>Contact Us</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Right Side Sticky Social Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col bg-white shadow-xl rounded-l-xl overflow-hidden border border-slate-100">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3.5 bg-[#1877F2] text-white hover:bg-[#1877F2] transition-all duration-300 border-b border-slate-50 last:border-0 group"
          aria-label="Facebook"
        >
          <Facebook size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3.5 bg-[#E4405F] text-white hover:bg-[#E4405F] transition-all duration-300 border-b border-slate-50 last:border-0 group"
          aria-label="Instagram"
        >
          <Instagram size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3.5 bg-black text-white hover:bg-black transition-all duration-300 border-b border-slate-50 last:border-0 group"
          aria-label="Twitter"
        >
          <Twitter size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3.5 bg-[#0A66C2] text-white hover:bg-[#0A66C2] transition-all duration-300 border-b border-slate-50 last:border-0 group"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
        </a>
         <a 
          href="https://wa.me/918344496674" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3.5 bg-[#25D366] text-white hover:bg-[#25D366] transition-all duration-300 group"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Floating Support Button */}
      <Link
        to="/contact"
        className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-xl shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-600/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact Support"
      >
        <MessageCircle size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100">
          Chat with us
        </span>
      </Link>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-white">KVK TEX</h3>
              <p className="text-sm leading-relaxed max-w-xs text-slate-400">
                Premium textile manufacturing delivering excellence in every thread. Located in the heart of Tirupur.
              </p>
              <div className="pt-2">
                 <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">GSTIN</p>
                 <p className="font-mono text-white">33CGYPD7995K1ZE</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link></li>
                <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">Pique Fabric</Link></li>
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">Jersey Fabrics</Link></li>
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">French Terry</Link></li>
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">Fleece</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact Info</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="shrink-0 text-blue-500" size={18} />
                  <p>3/1A, Elango Nagar 1st Street,<br />Tirupur - 641602.</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="shrink-0 text-blue-500" size={18} />
                  <p>+91 83444 96674</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="shrink-0 text-blue-500" size={18} />
                  <p>kvktextpr@gmail.com</p>
                </div>
                <div className="flex gap-4 pt-2">
                   <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20}/></a>
                   <a href="#" className="hover:text-blue-500 transition-colors"><Instagram size={20}/></a>
                   <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20}/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} KVK TEX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;