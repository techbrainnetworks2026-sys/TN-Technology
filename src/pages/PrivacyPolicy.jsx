import AnimatedSection from '../components/AnimatedSection';
import { Shield } from 'lucide-react';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
        
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', marginBottom: '1.5rem', background: 'rgba(123, 97, 255, 0.1)', padding: '1rem', borderRadius: '50%' }}>
              <Shield size={48} className="neon-text-purple" />
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Privacy <span className="gradient-text">Policy</span></h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass-panel" style={{ padding: '3rem' }}>
            
            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-text)' }}>1. Introduction</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                TechBrain Networks ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-text)' }}>2. Data We Collect</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '2rem' }}>
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-text)' }}>3. How We Use Your Data</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                Where we need to perform the contract we are about to enter into or have entered into with you.
                Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
                Where we need to comply with a legal obligation.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-text)' }}>4. Data Security</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-text)' }}>5. Contact Us</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                <br/><br/>
                <strong>Email:</strong> contact@techbrainnetworks.com<br/>
                <strong>Address:</strong> 6/12 Papa vaikal Street, Ayyampettai Post, Papanasam Taluk, Thanjavur 614201, Tamilnadu, India.
              </p>
            </section>

          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
