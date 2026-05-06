import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { name: 'Home', id: 'home', path: '/#home' },
    { name: 'About', id: 'about', path: '/#about' },
    { name: 'Industries', id: 'industries', path: '/#industries' },
    { name: 'Services', id: 'services', path: '/#services' },
    { name: 'Careers', id: 'careers', path: '/#careers' },
    { name: 'Contact Us', id: 'contact', path: '/#contact' }
  ];

  const handleScrollClick = (e, id) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
      }
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'var(--color-glass-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-glass-border)' : 'none',
      padding: scrolled ? '1rem 0' : '1.5rem 0'
    }}>
      <div style={{    margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* LOGO */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Cpu className="neon-text-blue" size={32} />
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px' }}>
            TECHBRAIN NETWORKS
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="desktop-nav" style={{ display: 'none', gap: '2rem' }}>
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              onClick={(e) => handleScrollClick(e, link.id)}
              style={{
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--color-text-muted)',
                transition: 'color 0.3s ease',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-blue)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer', display: 'block' }}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {mobileOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'var(--color-bg-primary)',
            borderBottom: '1px solid var(--color-glass-border)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              onClick={(e) => handleScrollClick(e, link.id)}
              style={{ fontSize: '1.1rem', letterSpacing: '1px', color: 'var(--color-text-primary)' }}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}} />
    </nav>
  );
};

export default Navigation;
