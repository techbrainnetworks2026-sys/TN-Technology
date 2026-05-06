import { useParams, Link } from 'react-router-dom';
import { products } from '../data/companyData';
import AnimatedSection from '../components/AnimatedSection';
import * as Icons from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', color: 'var(--color-text-muted)' }}>
        <h2>Product not found</h2>
        <Link to="/" style={{ color: 'var(--color-secondary)', marginTop: '1rem', display: 'inline-block' }}>Return Home</Link>
      </div>
    );
  }

  const IconComponent = Icons[product.icon] || Icons.Box;

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '6rem' }}>
      
      {/* HERO SECTION */}
      <section style={{ 
        padding: '6rem 2rem', 
        background: 'linear-gradient(to bottom, rgba(10, 15, 28, 1) 0%, rgba(5, 8, 15, 0) 100%)',
        borderBottom: '1px solid var(--color-glass-border)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <div style={{ display: 'inline-flex', background: 'rgba(0, 245, 255, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '2rem' }}>
               <IconComponent size={64} className="neon-text-blue" />
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>{product.name}</h1>
            <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'var(--color-accent)', fontWeight: '600' }}>
              {product.tagline}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* Overview */}
        <AnimatedSection delay={0.1}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Overview</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              {product.overview}
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ color: '#fff', fontWeight: 600 }}>Optimal For:</span>
              {product.industries.map(ind => (
                <span key={ind} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          
          {/* How It Works */}
          <AnimatedSection delay={0.2}>
            <div className="glass-panel" style={{ padding: '2.5rem', height: '100%' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Icons.Settings className="neon-text-purple" /> How It Works
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {product.howItWorks.map((step, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'var(--color-secondary)', color: '#000', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
                      {idx + 1}
                    </div>
                    <span style={{ color: 'var(--color-text-muted)', paddingTop: '2px' }}>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Core Functions & Tech */}
          <AnimatedSection delay={0.3}>
            <div className="glass-panel" style={{ padding: '2.5rem', height: '100%' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Icons.Layers className="neon-text-blue" /> Core Capabilities
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {product.coreFunctions.map((func, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--color-text-muted)' }}>
                    <Icons.CheckCircle size={18} className="neon-text-blue" /> {func}
                  </li>
                ))}
              </ul>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                Stack Technologies
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {product.technologies.map((tech, idx) => (
                  <span key={idx} style={{ border: '1px solid var(--color-glass-border)', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* Benefits Grid */}
        <AnimatedSection delay={0.4}>
          <div style={{ marginTop: '5rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>Enterprise <span className="gradient-text">Benefits</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {product.benefits.map((ben, idx) => {
                let IconRef = Icons.Zap;
                if (ben.title === 'Security') IconRef = Icons.ShieldCheck;
                if (ben.title === 'Scalability') IconRef = Icons.TrendingUp;
                if (ben.title === 'Cost efficiency') IconRef = Icons.PieChart;

                return (
                  <div key={idx} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                    <IconRef size={32} className="neon-text-purple" style={{ marginBottom: '1rem' }} />
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{ben.title}</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{ben.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Future Projection Section */}
        <AnimatedSection delay={0.5}>
          <div style={{ 
            marginTop: '5rem', 
            background: 'linear-gradient(135deg, rgba(123, 97, 255, 0.1) 0%, rgba(0, 245, 255, 0.05) 100%)',
            border: '1px solid var(--color-accent)',
            padding: '4rem 2rem',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <Icons.Rocket size={48} className="neon-text-blue" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Future Growth (Next 20 Years)</h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text)', maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
              "{product.futureGrowth}"
            </p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2.5rem', maxWidth: '600px', margin: '0 auto' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }}>How TechBrain Networks Helps</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                We provide custom solutions, military-grade integration support, and massive enterprise scalability to ensure your systems remain dominant into the next generation.
              </p>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default ProductDetail;
