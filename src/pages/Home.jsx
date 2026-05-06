import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/companyData';
import { ArrowRight, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      
      {/* HERO SECTION */}
      <section className="hero-matrix-bg" style={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Particles/Orbs */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', width: '300px', height: '300px', background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)', top: '10%', left: '5%', zIndex: 0, filter: 'blur(60px)' }}
        />
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', bottom: '10%', right: '5%', zIndex: 0, filter: 'blur(80px)' }}
        />

        <div style={{ maxWidth: '1000px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <AnimatedSection>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(123, 97, 255, 0.15)', border: '1px solid var(--color-accent-purple)', padding: '0.5rem 1.5rem', borderRadius: '50px', marginBottom: '2rem', color: 'var(--color-accent-blue)', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
              <Zap size={18} className="neon-text-purple" /> Next-Gen Enterprise Software
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 1.1, marginBottom: '1.5rem',    color: 'var(--color-text-heading)' }}>
              Engineering the Future of <span className="gradient-text">Intelligent Technology</span> 
            </h1>
            
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--color-text-primary)', marginBottom: '3.5rem', maxWidth: '800px', margin: '0 auto 3rem auto', fontFamily: 'var(--font-body)', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              We build extreme-scale, autonomous, and cyber-resilient platforms that drive innovation across enterprise and global defense networks. Experience absolute technological supremacy.
            </p>
            
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <button 
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'linear-gradient(90deg, var(--color-secondary), #82d0f7ff)',
                  color: '#0A0F1C',
                  border: 'none',
                  padding: '1.25rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textTransform: 'uppercase',
                  boxShadow: '0 0 25px rgba(0, 247, 255, 0.02)',
                  transition: 'all 0.3s ease',
                  fontFamily: 'var(--font-heading)'
                }}
                onMouseEnter={(e) => { e.target.style.boxShadow = '0 0 40px rgba(0, 247, 255, 0)'; e.target.style.transform = 'scale(1.05)' }}
                onMouseLeave={(e) => { e.target.style.boxShadow = '0 0 25px rgba(0, 247, 255, 0.1)'; e.target.style.transform = 'scale(1)' }}
              >
                Explore Systems <ArrowRight size={22} />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" style={{ padding: '6rem 2rem', background: 'rgba(5, 8, 15, 0.5)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core <span className="neon-text-blue">Solutions</span></h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>Deploy the most advanced capabilities available in the global tech ecosystem.</p>
            </div>
          </AnimatedSection>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {products.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.05}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
