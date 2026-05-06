import AnimatedSection from '../components/AnimatedSection';
import { Target, Globe, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
        
        <AnimatedSection>
          <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
            About <span className="neon-text-blue">TechBrain Networks</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', textAlign: 'center', marginBottom: '4rem' }}>
            Techbrain Networks is a leading Software Product Development company that specializes in AI, IoT, Big data, Blockchain, Cloud Computing, Quantum Computing, and Digital Marketing.
          </p>
        </AnimatedSection>

        <div style={{ display: 'grid', gap: '3rem', marginBottom: '5rem' }}>
          
          <AnimatedSection delay={0.1}>
            <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
              <Target size={120} style={{ position: 'absolute', right: '-20px', top: '-10px', opacity: 0.05, color: 'var(--color-secondary)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--color-secondary)', padding: '0.75rem', borderRadius: '12px', color: '#000' }}>
                  <Globe size={24} />
                </div>
                <h2 style={{ fontSize: '1.8rem' }}>Our Vision</h2>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
              <Users size={120} style={{ position: 'absolute', right: '-20px', top: '-10px', opacity: 0.05, color: 'var(--color-accent)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--color-accent)', padding: '0.75rem', borderRadius: '12px', color: '#fff' }}>
                  <Target size={24} />
                </div>
                <h2 style={{ fontSize: '1.8rem' }}>Our Mission</h2>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
              <Lightbulb size={120} style={{ position: 'absolute', right: '-20px', top: '-10px', opacity: 0.05, color: 'var(--color-secondary)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'linear-gradient(90deg, var(--color-secondary), var(--color-accent))', padding: '0.75rem', borderRadius: '12px', color: '#fff' }}>
                  <Lightbulb size={24} />
                </div>
                <h2 style={{ fontSize: '1.8rem' }}>Our Passion</h2>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.
              </p>
            </div>
          </AnimatedSection>

        </div>

        {/* Global Impact Statement */}
        <AnimatedSection>
          <div style={{ 
            textAlign: 'center', 
            padding: '4rem 2rem', 
            background: 'rgba(123, 97, 255, 0.05)', 
            border: '1px solid rgba(123, 97, 255, 0.28)',
            borderRadius: '16px',
            marginBottom: '4rem'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>Global Impact Ecosystem</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              We are revolutionizing the future of technology with 480 innovative products spanning 24 industries. Starting in 2027, our solutions will reach 30 countries, transforming industries and improving lives. Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future.
            </p>
          </div>
        </AnimatedSection>

        {/* Founder Section */}
        <AnimatedSection>
          <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'var(--color-glass-bg)',
              border: '2px solid var(--color-secondary)',
              margin: '0 auto 1.5rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(0, 247, 255, 0)'
            }}>
              <Users size={48} className="neon-text-blue" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Ramkumar Arunachalam</h3>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Founder of Techbrain Networks</p>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default About;
