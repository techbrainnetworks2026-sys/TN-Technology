import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

import './productCard.css';

const ProductCard = ({ product }) => {
  const IconComponent =
    Icons[product.icon] || Icons.Box;

  return (
    <motion.div
      className="glass-panel glow-hover product-card"
    >

      {/* IMAGE */}
      <div className="img-zoom-container">

        <img
          src={
            product.image ||
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop'
          }
          alt={product.name}
          className="img-zoom-content"
        />

        <div className="product-icon-badge">

          <IconComponent
            size={24}
            className="neon-text-blue"
          />

        </div>

      </div>

      {/* CONTENT */}
      <div className="product-card-content">

        <h3 className="product-card-title">
          {product.name}
        </h3>

        <p className="product-card-description">
          {product.shortDesc}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="product-card-link"
        >

          Explore System

          <Icons.ArrowRight size={16} />

        </Link>

      </div>

    </motion.div>
  );
};

export default ProductCard;