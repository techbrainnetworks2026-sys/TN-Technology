import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-glass-border)',
      background: 'rgba(5, 8, 15, 0.95)',
      padding: '4rem 2rem 2rem 2rem',
      marginTop: 'auto'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
        
        {/* Logo & About */}
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Cpu className="neon-text-blue" size={32} />
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px' }}>
              TECHBRAIN
            </span>
          </Link>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Engineering the Future of Intelligent Technology. Your all-in-one stop for bespoke, enterprise-grade AI and cyber-defense solutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" className="neon-text-blue"><Facebook size={20} /></a>
            <a href="#" className="neon-text-blue"><Twitter size={20} /></a>
            <a href="#" className="neon-text-blue"><Linkedin size={20} /></a>
            <a href="#" className="neon-text-blue"><Github size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/about" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}>About Us</Link></li>
            <li><Link to="/services" style={{ color: 'var(--color-text-muted)' }}>Services</Link></li>
            <li><Link to="/industries" style={{ color: 'var(--color-text-muted)' }}>Industries</Link></li>
            <li><Link to="/careers" style={{ color: 'var(--color-text-muted)' }}>Careers</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--color-text-muted)' }}>Contact Us</Link></li>
            <li><Link to="/privacy-policy" style={{ color: 'var(--color-text-muted)' }}>Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact India */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>India Office</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <MapPin size={18} className="neon-text-blue" style={{ flexShrink: 0 }} />
              <span>6/12 Papa vaikal Street, Ayyampettai Post<br/>Papanasam Taluk, Thanjavur 614201<br/>Tamilnadu, India</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <Phone size={18} className="neon-text-blue" />
              <span>+91 8754906714</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <Mail size={18} className="neon-text-blue" />
              <span>contact@techbrainnetworks.com</span>
            </li>
          </ul>
        </div>

        {/* Contact UK */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>UK Office</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <MapPin size={18} className="neon-text-purple" style={{ flexShrink: 0 }} />
              <span>71-75 Shelton Street, Covent Garden<br/>London, WC2H 9JQ<br/>United Kingdom</span>
            </li>
          </ul>
        </div>
        
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '3rem auto 0 auto',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
        fontSize: '0.85rem'
      }}>
        © {new Date().getFullYear()} TechBrain Networks. All rights reserved. Future limits redefined.
      </div>
    </footer>
  );
};

export default Footer;
