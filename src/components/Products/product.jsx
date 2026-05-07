import AnimatedSection from '../Animation/AnimatedSection';
import ProductCard from './productCard';
import { products } from '../../data/companyData';

import './product.css';

const Products = () => {
  return (
    <section
      id="products"
      className="products-section"
    >

      <div className="products-container">

        <AnimatedSection>

          <div className="products-header">

            <h2 className="products-title">
              Our Core{' '}
              <span className="neon-text-blue">
                Solutions
              </span>
            </h2>

            <p className="products-description">
              Deploy the most advanced capabilities
              available in the global tech ecosystem.
            </p>

          </div>

        </AnimatedSection>

        <div className="products-grid">

          {products.map((product, index) => (
            <AnimatedSection
              key={product.id}
              delay={index * 0.05}
            >
              <ProductCard product={product} />
            </AnimatedSection>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Products;