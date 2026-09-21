import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, RadioTower, Signal, Wifi, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const NetworkTowers = () => {
  const features = [
    { icon: <RadioTower style={{ color: 'var(--color-accent-tower)' }} size={32} />, title: "Tower Erection", desc: "Greenfield installation of macro-cell and micro-cell towers." },
    { icon: <Signal style={{ color: 'var(--color-accent-tower)' }} size={32} />, title: "5G Upgrades", desc: "Retrofitting and upgrading existing infrastructure for next-gen networks." },
    { icon: <Zap style={{ color: 'var(--color-accent-tower)' }} size={32} />, title: "Power Solutions", desc: "Reliable power backup and sustainable energy integration." },
    { icon: <Wifi style={{ color: 'var(--color-accent-tower)' }} size={32} />, title: "Network Maintenance", desc: "24/7 monitoring and structural maintenance services." }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '60vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img src="/images/telecom_towers_1790011421272.jpg" alt="Telecom Towers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.7)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem' }}>
              Telecom <span style={{ color: 'var(--color-accent-tower)' }}>Towers</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '600px', lineHeight: 1.6 }}>
              Erecting high-quality network infrastructure to bridge the digital divide. We enable seamless connectivity everywhere.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          {/* Main Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Connecting the Unconnected</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              As India experiences an unprecedented digital boom, robust telecommunication infrastructure is more critical than ever. 369 AKR Group specializes in the deployment, maintenance, and upgrading of telecom towers across urban and remote landscapes.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: 1.8 }}>
              Our dedicated teams work alongside leading telecom operators to rapidly scale their network footprint, ensuring structural integrity and optimizing for the rollout of 5G technologies.
            </p>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Rapid deployment capabilities', 'Structural health auditing', 'Integration of green power solutions', 'Site acquisition and regulatory clearance'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--color-secondary)' }}>
                  <CheckCircle2 style={{ color: 'var(--color-accent-tower)', flexShrink: 0 }} /> {item}
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
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Expand your network coverage with us.</h2>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2rem' }}>We provide end-to-end infrastructure solutions for telecom operators.</p>
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-accent-tower)', color: 'white', border: 'none' }}>
            Contact Our Team <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NetworkTowers;
