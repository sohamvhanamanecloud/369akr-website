import { motion } from 'framer-motion';

interface PhotoGalleryProps {
  images: string[];
  title?: string;
  description?: string;
}

const PhotoGallery = ({ images, title = "Live Operations", description = "On-the-ground execution of our latest infrastructure projects." }: PhotoGalleryProps) => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-surface-alt)', borderTop: '1px solid #E2E8F0' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>{title}</h2>
          <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', lineHeight: 1.6 }}>{description}</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="card-solid"
              style={{ overflow: 'hidden', height: '350px', position: 'relative', borderRadius: 'var(--radius-md)' }}
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={src} 
                alt={`Operation ${idx + 1}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
