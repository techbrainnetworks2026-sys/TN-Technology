import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const ProductCard = ({ product }) => {
  const IconComponent = Icons[product.icon] || Icons.Box;

  return (
    <motion.div
      className="glass-panel glow-hover"
      style={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}
    >
      {/* High-tech product image overlay */}
      <div className="img-zoom-container" style={{ position: 'relative' }}>
        <img 
          src={product.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"} 
          alt={product.name}
          className="img-zoom-content"
        />
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(10, 15, 28, 0.8)',
          backdropFilter: 'blur(8px)',
          padding: '0.5rem',
          borderRadius: '8px',
          border: '1px solid var(--color-secondary)'
        }}>
          <IconComponent size={24} className="neon-text-blue" />
        </div>
      </div>

      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', flex: 0, fontWeight: '700' }}>{product.name}</h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '2rem', flex: 1, fontFamily: 'var(--font-body)' }}>
          {product.shortDesc}
        </p>

        <Link 
          to={`/product/${product.id}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--color-secondary)',
            fontWeight: 600,
            marginTop: 'auto',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontFamily: 'var(--font-body)'
          }}
        >
          Explore System <Icons.ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
