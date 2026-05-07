import AnimatedSection from '../Animation/AnimatedSection';
import { industries } from '../../data/companyData';
import { Factory } from 'lucide-react';
import './Industries.css';

const Industries = () => {
  return (
    <div className="industries-section">

      <div className="industries-container">

        <AnimatedSection>
          <div className="industries-header">

            <h1 className="industries-title">
              Global <span className="neon-text-blue">Industries</span>
            </h1>

            <p className="industries-description">
              Our advanced platforms and resilient architectural systems are foundational to 24 diverse global sectors.
            </p>

          </div>
        </AnimatedSection>

        <div className="industries-grid">

          {industries.map((ind, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.02}
            >

              <div className="glass-panel glow-hover industry-card">

                <div className="industry-icon-wrapper">

                  {ind.icon ? (
                    <span>{ind.icon}</span>
                  ) : (
                    <Factory
                      className="neon-text-blue"
                      size={28}
                    />
                  )}

                </div>

                <h3 className="industry-title">
                  {ind.name || ind}
                </h3>

              </div>

            </AnimatedSection>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Industries;