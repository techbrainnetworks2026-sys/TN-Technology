import { Link } from 'react-router-dom';
import {
  Cpu,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="footer-grid">

        {/* Logo & About */}
        <div>

          <Link to="/" className="footer-logo">
            <Cpu className="neon-text-blue" size={32} />

            <span className="footer-logo-text">
              TECHBRAIN NETWORKS
            </span>
          </Link>

          <p className="footer-description">
            Engineering the Future of Intelligent Technology. Your all-in-one stop for bespoke, enterprise-grade AI and cyber-defense solutions.
          </p>

          <div className="footer-socials">

            <a href="#" className="neon-text-blue">
              <Facebook size={20} />
            </a>

            <a href="#" className="neon-text-blue">
              <Twitter size={20} />
            </a>

            <a href="#" className="neon-text-blue">
              <Linkedin size={20} />
            </a>

            <a href="#" className="neon-text-blue">
              <Github size={20} />
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h4 className="footer-heading">
            Quick Links
          </h4>

          <ul className="footer-links">

            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/services" className="footer-link">
                Services
              </Link>
            </li>

            <li>
              <Link to="/industries" className="footer-link">
                Industries
              </Link>
            </li>

            <li>
              <Link to="/careers" className="footer-link">
                Careers
              </Link>
            </li>

            <li>
              <Link to="/contact" className="footer-link">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/privacy-policy" className="footer-link">
                Privacy Policy
              </Link>
            </li>

          </ul>

        </div>

        {/* India Office */}
        <div>

          <h4 className="footer-heading">
            India Office
          </h4>

          <ul className="footer-contact-list">

            <li className="footer-contact-item align-start">
              <MapPin
                size={18}
                className="neon-text-blue footer-icon"
              />

              <span>
                6/12 Papa vaikal Street, Ayyampettai Post
                <br />
                Papanasam Taluk, Thanjavur 614201
                <br />
                Tamilnadu, India
              </span>
            </li>

            <li className="footer-contact-item">
              <Phone
                size={18}
                className="neon-text-blue"
              />

              <span>
                +91 8754906714
              </span>
            </li>

            <li className="footer-contact-item">
              <Mail
                size={18}
                className="neon-text-blue"
              />

              <span>
                contact@techbrainnetworks.com
              </span>
            </li>

          </ul>

        </div>

        {/* UK Office */}
        <div>

          <h4 className="footer-heading">
            UK Office
          </h4>

          <ul className="footer-contact-list">

            <li className="footer-contact-item align-start">

              <MapPin
                size={18}
                className="neon-text-purple footer-icon"
              />

              <span>
                71-75 Shelton Street, Covent Garden
                <br />
                London, WC2H 9JQ
                <br />
                United Kingdom
              </span>

            </li>

          </ul>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        © {new Date().getFullYear()} TechBrain Networks.
        All rights reserved. Future limits redefined.

      </div>

    </footer>
  );
};

export default Footer;