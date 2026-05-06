import AnimatedSection from '../components/AnimatedSection';
import { industries } from '../data/companyData';
import { Factory } from 'lucide-react';

const Industries = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Global <span className="neon-text-blue">Industries</span></h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
              Our advanced platforms and resilient architectural systems are foundational to 24 diverse global sectors.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {industries.map((ind, index) => (
            <AnimatedSection key={index} delay={index * 0.02}>
              <div className="glass-panel glow-hover" style={{
                padding: '2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{ background: 'rgba(0, 245, 255, 0.1)', padding: '1rem', borderRadius: '50%', fontSize: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px' }}>
                  {ind.icon ? (
                     <span>{ind.icon}</span>
                  ) : (
                    <Factory className="neon-text-blue" size={28} />
                  )}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{ind.name || ind}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Industries;
