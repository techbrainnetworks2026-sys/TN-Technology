import AnimatedSection from '../components/AnimatedSection';
import { careers } from '../data/companyData';
import { Briefcase, ArrowRight } from 'lucide-react';

const Careers = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
        
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Join the <span className="neon-text-blue">Future</span></h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>
              Shape the next era of technological supremacy. We are always looking for visionary minds.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {careers.map((career, index) => (
            <AnimatedSection key={index} delay={index * 0.03}>
              <div className="glass-panel glow-hover" style={{ 
                padding: '2rem', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ background: 'rgba(123, 97, 255, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                    <Briefcase className="neon-text-purple" size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{career.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                      <span style={{ color: 'var(--color-secondary)' }}>Key Skills:</span> {career.skill}
                    </p>
                  </div>
                </div>

                <button style={{ 
                  background: 'transparent',
                  border: '1px solid var(--color-glass-border)',
                  color: 'var(--color-text)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s'
                }} className="glow-hover">
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
