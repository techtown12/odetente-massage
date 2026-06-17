import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ShoppingCart from '@/components/ShoppingCart.jsx';
import { useCart } from '@/hooks/useCart.jsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pages avec hero : transparent + texte blanc au début
  const hasHero = ['/', '/services', '/shop', '/faq'].includes(location.pathname);
  const lightMode = hasHero && !scrolled;

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Boutique', path: '/shop' },
    { name: 'À Propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-md py-4 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="relative z-50">
              <h1 className={`text-3xl md:text-4xl m-0 leading-none tracking-tight transition-colors duration-500 ${
                lightMode ? 'text-white' : 'text-primary'
              }`}>
                Ô Détente
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-widest uppercase transition-colors duration-300 link-underline ${
                    isActive(link.path) 
                      ? (lightMode ? 'text-white font-medium' : 'text-primary font-medium')
                      : (lightMode ? 'text-white/80 hover:text-white' : 'text-foreground/70 hover:text-primary')
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-6 relative z-50">
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2 transition-colors ${
                  lightMode ? 'text-white/80 hover:text-white' : 'text-foreground/80 hover:text-primary'
                }`}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {cartItemCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 transition-colors ${
                  lightMode ? 'text-white/80 hover:text-white' : 'text-foreground/80 hover:text-primary'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 w-full bg-background border-b border-border lg:hidden shadow-lg"
            >
              <nav className="flex flex-col px-6 py-8 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg tracking-widest uppercase transition-colors ${
                      isActive(link.path) ? 'text-primary' : 'text-foreground/70'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
};

export default Header;
