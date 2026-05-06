import AnimatedSection from '../components/AnimatedSection';
import { services } from '../data/companyData';
import { Code, Cpu, PenTool, Database } from 'lucide-react';

const Services = () => {
  const getIcon = (id) => {
    switch (id) {

      case 'software-development': return <Code size={40} className="neon-text-blue" />;
      case 'hardware-engineering': return <Cpu size={40} className="neon-text-purple" />;
      case 'product-design': return <PenTool size={40} className="neon-text-blue" />;
      case 'research-development': return <Database size={40} className="neon-text-purple" />;
      default: return <Code size={40} />;
    }
  };

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Our <span className="gradient-text">Services</span></h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
              We take pride in being an innovative organization where the digital revolution thrives and new advances are always on the horizon.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <div className="glass-panel" style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}>
                <img style={{ width: '100%', height: '420px' }} src={service.image} />

                <div style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{service.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
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
