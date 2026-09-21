import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Train, Map, HardHat, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Railway = () => {
  const features = [
    { icon: <Map className="text-red-500" size={32} />, title: "Track Laying & Alignment", desc: "Precision engineering for high-speed and freight corridors." },
    { icon: <HardHat className="text-red-500" size={32} />, title: "Civil Construction", desc: "Building bridges, tunnels, and foundational infrastructure." },
    { icon: <Train className="text-red-500" size={32} />, title: "Electrification", desc: "Modernizing networks with efficient power delivery systems." },
    { icon: <ShieldCheck className="text-red-500" size={32} />, title: "Safety Systems", desc: "Implementing advanced signaling and communication grids." }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '60vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img src="/images/railway_infra_1790011408588.jpg" alt="Railway Infrastructure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.7)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem' }}>
              Railway <span style={{ color: 'var(--color-accent-railway)' }}>Infrastructure</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '600px', lineHeight: 1.6 }}>
              Building the physical backbone of India's transport network. We engineer robust, high-capacity railway systems designed for safety and speed.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          {/* Main Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Connecting the Nation</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              At 369 AKR Group, our railway division is dedicated to expanding and modernizing India's vast rail network. From challenging terrains to dense urban centers, our teams deliver world-class civil and structural engineering solutions.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: 1.8 }}>
              We partner with government authorities and private entities to ensure that freight and passenger lines are built to endure, utilizing the latest in construction technology and sustainable practices.
            </p>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['End-to-end project management', 'Strict adherence to global safety standards', 'On-time delivery of critical infrastructure', 'Sustainable and eco-friendly construction methods'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--color-secondary)' }}>
                  <CheckCircle2 style={{ color: 'var(--color-accent-railway)', flexShrink: 0 }} /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Features Grid */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {features.map((feat, i) => (
              <div key={i} className="card-solid" style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1rem' }}>{feat.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>{feat.title}</h3>
                <p style={{ color: 'var(--color-text-light)' }}>{feat.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginTop: '5rem', padding: '4rem', backgroundColor: 'var(--color-secondary)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Ready to partner on your next major project?</h2>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2rem' }}>Our engineering experts are ready to discuss your requirements.</p>
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-accent-railway)', color: 'white', border: 'none' }}>
            Get in Touch <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Railway;
