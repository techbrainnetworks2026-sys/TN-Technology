import AnimatedSection from '../Animation/AnimatedSection';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">

        <AnimatedSection>
          <div className="contact-header">

            <h1 className="contact-title">
              Connect With <span className="gradient-text">Us</span>
            </h1>

            <p className="contact-description">
              Your all-in-one stop for digital products. If you're looking for customized solutions to power up your business, we'll be happy to help out!
            </p>

          </div>
        </AnimatedSection>

        <div className="responsive-contact-grid">

          {/* LEFT SIDE */}
          <AnimatedSection delay={0.1}>
            <div className="contact-info-wrapper">

              {/* India Office */}
              <div className="glass-panel contact-card">

                <h3 className="contact-card-title">
                  <MapPin className="neon-text-blue" />
                  India Office
                </h3>

                <p className="contact-address">
                  6/12 Papa vaikal Street, Ayyampettai Post
                  <br />
                  Papanasam Taluk
                  <br />
                  Thanjavur 614201, Tamilnadu, India.
                </p>

                <p className="contact-detail">
                  <Phone className="neon-text-blue" size={18} />
                  +91 8754906714
                </p>

                <p className="contact-detail">
                  <Mail className="neon-text-blue" size={18} />
                  contact@techbrainnetworks.com
                </p>

              </div>

              {/* UK Office */}
              <div className="glass-panel contact-card">

                <h3 className="contact-card-title">
                  <MapPin className="neon-text-purple" />
                  United Kingdom
                </h3>

                <p className="contact-address">
                  71-75 Shelton Street, Covent Garden
                  <br />
                  London, WC2H 9JQ
                  <br />
                  United Kingdom.
                </p>

              </div>

            </div>
          </AnimatedSection>

          {/* RIGHT SIDE */}
          <AnimatedSection delay={0.2}>
            <div className="glass-panel contact-form-panel">

              <h3 className="contact-form-title">
                Send a Message
              </h3>

              <form className="contact-form">

                <div>
                  <label className="contact-label">
                    Name
                  </label>

                  <input
                    type="text"
                    className="contact-input"
                  />
                </div>

                <div>
                  <label className="contact-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="contact-input"
                  />
                </div>

                <div>
                  <label className="contact-label">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    className="contact-textarea"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="contact-button"
                >
                  Submit Request <Send size={20} />
                </button>

              </form>

            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
};

export default Contact;