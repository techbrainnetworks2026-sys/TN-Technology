import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
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
        el.scrollIntoView({
          behavior: 'smooth'
        });

        setMobileOpen(false);
      }
    }
  };

  return (
    <nav
      className={`navbar ${
        scrolled ? 'navbar-scrolled' : ''
      }`}
    >

      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
        >

          <Cpu
            className="neon-text-blue"
            size={32}
          />

          <span className="navbar-logo-text">
              TECHBRAIN NETWORKS
              <br />
              TECHNOLOGY
          </span>

        </Link>

        {/* DESKTOP NAV */}
        <div className="desktop-nav">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) =>
                handleScrollClick(e, link.id)
              }
              className="navbar-link"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="mobile-toggle"
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
        >
          {mobileOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="mobile-nav"
        >

          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) =>
                handleScrollClick(e, link.id)
              }
              className="mobile-nav-link"
            >
              {link.name}
            </a>
          ))}

        </motion.div>
      )}

    </nav>
  );
};

export default Navbar;