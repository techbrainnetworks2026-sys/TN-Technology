import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/companyData';
import AnimatedSection from '../Animation/AnimatedSection';
import * as Icons from 'lucide-react';

import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === id
  );

  if (!product) {
    return (
      <div className="product-not-found">

        <h2>Product not found</h2>

        <Link
          to="/"
          className="product-return-link"
        >
          Return Home
        </Link>

      </div>
    );
  }

  const IconComponent =
    Icons[product.icon] || Icons.Box;

  return (
    <div className="product-detail-page">

      {/* HERO */}
      <section className="product-hero">

        <div className="product-hero-container">

          <AnimatedSection>

            <div className="product-icon-wrapper">
              <IconComponent
                size={64}
                className="neon-text-blue"
              />
            </div>

            <h1 className="product-title">
              {product.name}
            </h1>

            <p className="product-tagline">
              {product.tagline}
            </p>

          </AnimatedSection>

        </div>

      </section>

      <div className="product-container">

        {/* OVERVIEW */}
        <AnimatedSection delay={0.1}>

          <div className="product-overview">

            <h2 className="section-title">
              Overview
            </h2>

            <p className="section-text">
              {product.overview}
            </p>

            <div className="industry-tags">

              <span className="industry-label">
                Optimal For:
              </span>

              {product.industries.map((ind) => (
                <span
                  key={ind}
                  className="industry-tag"
                >
                  {ind}
                </span>
              ))}

            </div>

          </div>

        </AnimatedSection>

        {/* GRID */}
        <div className="product-grid">

          {/* HOW IT WORKS */}
          <AnimatedSection delay={0.2}>

            <div className="glass-panel product-card">

              <h3 className="card-title">

                <Icons.Settings className="neon-text-purple" />

                How It Works

              </h3>

              <ul className="steps-list">

                {product.howItWorks.map(
                  (step, idx) => (
                    <li
                      key={idx}
                      className="step-item"
                    >

                      <div className="step-number">
                        {idx + 1}
                      </div>

                      <span className="step-text">
                        {step}
                      </span>

                    </li>
                  )
                )}

              </ul>

            </div>

          </AnimatedSection>

          {/* CAPABILITIES */}
          <AnimatedSection delay={0.3}>

            <div className="glass-panel product-card">

              <h3 className="card-title">

                <Icons.Layers className="neon-text-blue" />

                Core Capabilities

              </h3>

              <ul className="capability-list">

                {product.coreFunctions.map(
                  (func, idx) => (
                    <li
                      key={idx}
                      className="capability-item"
                    >

                      <Icons.CheckCircle
                        size={18}
                        className="neon-text-blue"
                      />

                      {func}

                    </li>
                  )
                )}

              </ul>

              <h3 className="tech-title">
                Stack Technologies
              </h3>

              <div className="tech-grid">

                {product.technologies.map(
                  (tech, idx) => (
                    <span
                      key={idx}
                      className="tech-badge"
                    >
                      {tech}
                    </span>
                  )
                )}

              </div>

            </div>

          </AnimatedSection>

        </div>

        {/* BENEFITS */}
        <AnimatedSection delay={0.4}>

          <div className="benefits-section">

            <h2 className="benefits-title">
              Enterprise{' '}
              <span className="gradient-text">
                Benefits
              </span>
            </h2>

            <div className="benefits-grid">

              {product.benefits.map(
                (ben, idx) => {
                  let IconRef = Icons.Zap;

                  if (
                    ben.title === 'Security'
                  )
                    IconRef =
                      Icons.ShieldCheck;

                  if (
                    ben.title === 'Scalability'
                  )
                    IconRef =
                      Icons.TrendingUp;

                  if (
                    ben.title ===
                    'Cost efficiency'
                  )
                    IconRef =
                      Icons.PieChart;

                  return (
                    <div
                      key={idx}
                      className="glass-panel benefit-card"
                    >

                      <IconRef
                        size={32}
                        className="neon-text-purple benefit-icon"
                      />

                      <h4 className="benefit-title">
                        {ben.title}
                      </h4>

                      <p className="benefit-desc">
                        {ben.desc}
                      </p>

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </AnimatedSection>

        {/* FUTURE */}
        <AnimatedSection delay={0.5}>

          <div className="future-section">

            <Icons.Rocket
              size={48}
              className="neon-text-blue future-icon"
            />

            <h3 className="future-title">
              Future Growth (Next 20 Years)
            </h3>

            <p className="future-growth">
              "{product.futureGrowth}"
            </p>

            <div className="future-bottom">

              <h4 className="future-subtitle">
                How TechBrain Networks Helps
              </h4>

              <p className="future-description">
                We provide custom solutions,
                military-grade integration
                support, and massive enterprise
                scalability to ensure your
                systems remain dominant into the
                next generation.
              </p>

            </div>

          </div>

        </AnimatedSection>

      </div>

    </div>
  );
};

export default ProductDetail;