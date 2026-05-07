import AnimatedSection from '../Animation/AnimatedSection';
import { Target, Globe, Lightbulb, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">

        <AnimatedSection>
          <h1 className="about-title">
            About <span className="neon-text-blue">TechBrain Networks</span>
          </h1>

          <p className="about-description">
            Techbrain Networks is a leading Software Product Development company that specializes in AI, IoT, Big data, Blockchain, Cloud Computing, Quantum Computing, and Digital Marketing.
          </p>
        </AnimatedSection>

        <div className="about-grid">

          {/* Vision */}
          <AnimatedSection delay={0.1}>
            <div className="glass-panel about-card">
              <Target size={120} className="about-bg-icon secondary" />

              <div className="about-card-header">
                <div className="about-icon-box secondary-bg">
                  <Globe size={24} />
                </div>

                <h2 className="about-card-title">Our Vision</h2>
              </div>

              <p className="about-card-text">
                We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.
              </p>
            </div>
          </AnimatedSection>

          {/* Mission */}
          <AnimatedSection delay={0.2}>
            <div className="glass-panel about-card">
              <Users size={120} className="about-bg-icon accent" />

              <div className="about-card-header">
                <div className="about-icon-box accent-bg">
                  <Target size={24} />
                </div>

                <h2 className="about-card-title">Our Mission</h2>
              </div>

              <p className="about-card-text">
                We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.
              </p>
            </div>
          </AnimatedSection>

          {/* Passion */}
          <AnimatedSection delay={0.3}>
            <div className="glass-panel about-card">
              <Lightbulb size={120} className="about-bg-icon secondary" />

              <div className="about-card-header">
                <div className="about-icon-box gradient-bg">
                  <Lightbulb size={24} />
                </div>

                <h2 className="about-card-title">Our Passion</h2>
              </div>

              <p className="about-card-text">
                Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.
              </p>
            </div>
          </AnimatedSection>

        </div>

        {/* Global Impact */}
        <AnimatedSection>
          <div className="about-impact">
            <h3 className="about-impact-title">Global Impact Ecosystem</h3>

            <p className="about-impact-text">
              We are revolutionizing the future of technology with 480 innovative products spanning 24 industries. Starting in 2027, our solutions will reach 30 countries, transforming industries and improving lives. Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future.
            </p>
          </div>
        </AnimatedSection>

        {/* Founder */}
        <AnimatedSection>
          <div className="about-founder">

            <div className="about-founder-avatar">
              <Users size={48} className="neon-text-blue" />
            </div>

            <h3 className="about-founder-name">
              Ramkumar Arunachalam
            </h3>

            <p className="about-founder-role">
              Founder of Techbrain Networks
            </p>

          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default About;