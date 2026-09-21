import { motion } from 'framer-motion';
import { ArrowRight, Train, RadioTower, Cable, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const verticals = [
    {
      title: 'Railway Infrastructure',
      description: 'Building robust and modernized railway networks across India.',
      icon: <Train size={40} style={{ color: 'var(--color-primary)' }} />,
      image: '/images/railway_infra_1790011408588.jpg',
      path: '/railway',
      color: 'var(--color-primary)',
      delay: 0.1
    },
    {
      title: 'Telecom Towers',
      description: 'Erecting high-quality network towers to connect the unconnected.',
      icon: <RadioTower size={40} style={{ color: 'var(--color-primary)' }} />,
      image: '/images/telecom_towers_1790011421272.jpg',
      path: '/network-towers',
      color: 'var(--color-primary)',
      delay: 0.2
    },
    {
      title: 'OFC Networks',
      description: 'Laying the optical fiber backbone for high-speed digital India.',
      icon: <Cable size={40} style={{ color: 'var(--color-primary)' }} />,
      image: '/images/ofc_networks_1790011434623.jpg',
      path: '/ofc',
      color: 'var(--color-primary)',
      delay: 0.3
    },
    {
      title: 'Solar Energy',
      description: '369AKR Universe: Sustainable solar solutions for a greener tomorrow.',
      icon: <Sun size={40} style={{ color: 'var(--color-primary)' }} />,
      image: '/images/solar_energy_1790011454687.jpg',
      path: '/solar',
      color: 'var(--color-primary)',
      delay: 0.4
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--color-primary)'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img src="/images/railway_infra_1790011408588.jpg" alt="Infrastructure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.85)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px' }}
          >
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Building India's <br />
              <span style={{ color: 'var(--color-accent)' }}>Core Infrastructure</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#CBD5E1', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.8 }}>
              From modernized railways and telecom towers to expansive OFC networks and renewable solar energy. We engineer the future.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Explore Our Group <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verticals Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Our Expertise</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto 1.5rem' }}></div>
            <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Delivering excellence across four critical infrastructure sectors, driving national growth and connectivity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {verticals.map((v, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: v.delay, duration: 0.5 }}
                className="card-solid"
                style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
              >
                <div style={{ height: '200px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                  <img src={v.image} alt={v.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', width: '50px', height: '50px', borderRadius: 'var(--radius-sm)', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                    {v.icon}
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>{v.title}</h3>
                  <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>{v.description}</p>
                  <Link to={v.path} style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    color: 'var(--color-accent)', 
                    fontWeight: 600 
                  }}>
                    View Projects <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-accent)' }}>250+</div>
              <div style={{ fontSize: '1.1rem', color: '#CBD5E1' }}>Projects Completed</div>
            </motion.div>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-accent)' }}>15+</div>
              <div style={{ fontSize: '1.1rem', color: '#CBD5E1' }}>Years Experience</div>
            </motion.div>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-accent)' }}>10K+</div>
              <div style={{ fontSize: '1.1rem', color: '#CBD5E1' }}>Km OFC Laid</div>
            </motion.div>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-accent)' }}>500+</div>
              <div style={{ fontSize: '1.1rem', color: '#CBD5E1' }}>Happy Clients</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
