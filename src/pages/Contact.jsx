import AnimatedSection from '../components/AnimatedSection';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Connect With <span className="gradient-text">Us</span></h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
              Your all-in-one stop for digital products. If you're looking for customized solutions to power up your business, we'll be happy to help out!
            </p>
          </div>
        </AnimatedSection>

        <div className="responsive-contact-grid">
          
          <AnimatedSection delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin className="neon-text-blue" /> India Office
                </h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  6/12 Papa vaikal Street, Ayyampettai Post<br/>
                  Papanasam Taluk<br/>
                  Thanjavur 614201, Tamilnadu, India.
                </p>
                <p style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Phone className="neon-text-blue" size={18} /> +91 8754906714
                </p>
                <p style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail className="neon-text-blue" size={18} /> contact@techbrainnetworks.com
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin className="neon-text-purple" /> United Kingdom
                </h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                  71-75 Shelton Street, Covent Garden<br/>
                  London, WC2H 9JQ<br/>
                  United Kingdom.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-panel" style={{ padding: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Send a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Name</label>
                  <input type="text" style={{
                    width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-glass-border)',
                    borderRadius: '8px', color: '#fff', outline: 'none'
                  }} />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Email</label>
                  <input type="email" style={{
                    width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-glass-border)',
                    borderRadius: '8px', color: '#fff', outline: 'none'
                  }} />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Message</label>
                  <textarea rows="5" style={{
                    width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-glass-border)',
                    borderRadius: '8px', color: '#fff', outline: 'none', resize: 'vertical'
                  }}></textarea>
                </div>

                <button type="button" style={{
                  background: 'var(--color-accent)', color: '#fff', border: 'none', padding: '1rem 2rem', marginTop: '1rem',
                  fontSize: '1rem', fontWeight: 600, borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: '0.75rem', transition: 'all 0.3s ease', boxShadow: '0 0 15px rgba(123, 97, 255, 0)'
                }}>
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
