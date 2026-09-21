import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Railways', path: '/railway' },
    { name: 'Telecom', path: '/network-towers' },
    { name: 'OFC', path: '/ofc' },
    { name: 'Solar', path: '/solar' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
      }}
    >
      <div className="logo" style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em', color: 'var(--color-primary)' }}>
        <Link to="/">369AKR <span className="gradient-text">GROUP</span></Link>
      </div>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path}
            style={{ 
              fontWeight: 600, 
              color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text)',
              position: 'relative'
            }}
          >
            {link.name}
            {location.pathname === link.path && (
              <motion.div 
                layoutId="underline"
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--color-primary)',
                  borderRadius: '2px'
                }}
              />
            )}
          </Link>
        ))}
        <Link to="/contact" className="btn btn-primary" style={{ marginLeft: '1rem' }}>
          Contact Us
        </Link>
      </div>
      
      {/* Add media query via injected style for mobile nav hiding */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>

      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        style={{ zIndex: 60, color: 'var(--color-primary)' }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem',
              gap: '1.5rem',
              borderBottom: '1px solid rgba(0,0,0,0.1)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                style={{ 
                  fontWeight: 600, 
                  fontSize: '1.25rem',
                  color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text)'
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
