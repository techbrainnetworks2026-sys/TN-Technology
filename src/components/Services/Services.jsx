import AnimatedSection from '../Animation/AnimatedSection';
import { services } from '../../data/companyData';

import {
  Code,
  Cpu,
  PenTool,
  Database
} from 'lucide-react';

import './Services.css';

const Services = () => {
  const getIcon = (id) => {
    switch (id) {
      case 'software-development':
        return (
          <Code
            size={40}
            className="neon-text-blue"
          />
        );

      case 'hardware-engineering':
        return (
          <Cpu
            size={40}
            className="neon-text-purple"
          />
        );

      case 'product-design':
        return (
          <PenTool
            size={40}
            className="neon-text-blue"
          />
        );

      case 'research-development':
        return (
          <Database
            size={40}
            className="neon-text-purple"
          />
        );

      default:
        return <Code size={40} />;
    }
  };

  return (
    <div className="services-section">

      <div className="services-container">

        {/* HEADER */}
        <AnimatedSection>

          <div className="services-header">

            <h1 className="services-title">
              Our{' '}
              <span className="gradient-text">
                Services
              </span>
            </h1>

            <p className="services-description">
              We take pride in being an innovative
              organization where the digital
              revolution thrives and new advances
              are always on the horizon.
            </p>

          </div>

        </AnimatedSection>

        {/* SERVICES GRID */}
        <div className="services-grid">

          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              delay={index * 0.1}
            >

              <div className="glass-panel service-card">

                <div className="service-image-wrapper">

                  <img
                    className="service-image"
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="service-icon">
                    {getIcon(service.id)}
                  </div>

                </div>

                <div className="service-content">

                  <h3 className="service-card-title">
                    {service.title}
                  </h3>

                  <p className="service-card-description">
                    {service.desc}
                  </p>

                </div>

              </div>

            </AnimatedSection>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Services;