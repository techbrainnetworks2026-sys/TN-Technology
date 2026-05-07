import AnimatedSection from '../Animation/AnimatedSection';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';


const Hero = () => {
  return (
    <section className="hero-matrix-bg hero-section">

      {/* Animated Orb 1 */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="hero-orb hero-orb-one"
      />

      {/* Animated Orb 2 */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="hero-orb hero-orb-two"
      />

      <div className="hero-container">

        <AnimatedSection>

          {/* Badge */}
          <div className="hero-badge">
            <Zap
              size={18}
              className="neon-text-purple"
            />

            Next-Gen Enterprise Software
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Engineering the Future of{' '}
            <span className="gradient-text">
              Intelligent Technology
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            We build extreme-scale, autonomous, and cyber-resilient platforms that drive innovation across enterprise and global defense networks. Experience absolute technological supremacy.
          </p>

          {/* Buttons */}
          <div className="hero-button-wrapper">

            <button
              className="hero-button"
              onClick={() =>
                document
                  .getElementById('products')
                  ?.scrollIntoView({
                    behavior: 'smooth'
                  })
              }
            >
              Explore Systems

              <ArrowRight size={22} />
            </button>

          </div>

        </AnimatedSection>

      </div>

    </section>
  );
};

export default Hero;