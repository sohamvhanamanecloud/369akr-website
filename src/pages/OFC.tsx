import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cable, Network, Shield, Pickaxe } from 'lucide-react';
import { Link } from 'react-router-dom';

const OFC = () => {
  const features = [
    { icon: <Pickaxe style={{ color: 'var(--color-accent-ofc)' }} size={32} />, title: "Trenching & Laying", desc: "Expert excavation and underground laying of fiber optic cables." },
    { icon: <Cable style={{ color: 'var(--color-accent-ofc)' }} size={32} />, title: "Splicing & Testing", desc: "Precision splicing ensuring zero-loss data transmission." },
    { icon: <Network style={{ color: 'var(--color-accent-ofc)' }} size={32} />, title: "Network Architecture", desc: "Designing scalable backbone and last-mile connectivity." },
    { icon: <Shield style={{ color: 'var(--color-accent-ofc)' }} size={32} />, title: "O&M Services", desc: "Continuous operations and maintenance of existing OFC grids." }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '60vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img src="/images/ofc_networks_1790011434623.jpg" alt="OFC Networks" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.8)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem' }}>
              OFC <span style={{ color: 'var(--color-accent-ofc)' }}>Networks</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '600px', lineHeight: 1.6 }}>
              Laying the optical fiber backbone for a high-speed Digital India. We build the arteries of modern communication.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          {/* Main Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Powering the Digital Revolution</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Optical Fiber Cable (OFC) networks are the invisible foundation of the modern internet. 369 AKR Group undertakes massive OFC laying projects to facilitate uninterrupted, high-speed broadband connectivity across the country.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: 1.8 }}>
              Using state-of-the-art horizontal directional drilling (HDD) and trenching techniques, we minimize surface disruption while laying thousands of kilometers of secure, highly durable fiber optic infrastructure.
            </p>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['National backbone laying', 'Last-mile FTTH infrastructure', 'Fault localization and rapid repair', 'Right of Way (RoW) clearances management'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--color-secondary)' }}>
                  <CheckCircle2 style={{ color: 'var(--color-accent-ofc)', flexShrink: 0 }} /> {item}
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
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Build your high-speed data backbone.</h2>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2rem' }}>Partner with us for reliable OFC infrastructure deployment.</p>
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-accent-ofc)', color: 'white', border: 'none' }}>
            Talk to an Expert <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OFC;
