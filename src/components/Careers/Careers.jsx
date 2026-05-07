import AnimatedSection from '../Animation/AnimatedSection';
import { careers } from '../../data/companyData';
import { Briefcase, ArrowRight } from 'lucide-react';
import './Careers.css';

const Careers = () => {
  return (
    <div className="careers-section">
      <div className="careers-container">

        <AnimatedSection>
          <div className="careers-header">
            <h1 className="careers-title">
              Join the <span className="neon-text-blue">Future</span>
            </h1>

            <p className="careers-description">
              Shape the next era of technological supremacy. We are always looking for visionary minds.
            </p>
          </div>
        </AnimatedSection>

        <div className="careers-grid">
          {careers.map((career, index) => (
            <AnimatedSection key={index} delay={index * 0.03}>

              <div className="glass-panel glow-hover career-card">

                <div className="career-left">

                  <div className="career-icon-box">
                    <Briefcase className="neon-text-purple" size={24} />
                  </div>

                  <div>
                    <h3 className="career-title">
                      {career.title}
                    </h3>

                    <p className="career-skills">
                      <span className="career-skill-label">
                        Key Skills:
                      </span>{' '}
                      {career.skill}
                    </p>
                  </div>

                </div>

                <button className="career-button glow-hover">
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