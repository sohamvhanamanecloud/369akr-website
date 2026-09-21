import { motion } from 'framer-motion';
import { ArrowRight, RadioTower, Signal, Wifi, Zap, Globe2, Shield, Wrench, LocateFixed } from 'lucide-react';
import { Link } from 'react-router-dom';

const NetworkTowers = () => {
  const features = [
    { icon: <RadioTower style={{ color: 'var(--color-accent-tower)' }} size={32} />, title: "Tower Erection", desc: "Greenfield installation of macro-cell and micro-cell towers built to withstand extreme loads." },
    { icon: <Signal style={{ color: 'var(--color-accent-tower)' }} size={32} />, title: "5G Upgrades", desc: "Retrofitting infrastructure to support massive bandwidth and massive MIMO antennas." },
    { icon: <Zap style={{ color: 'var(--color-accent-tower)' }} size={32} />, title: "Power Solutions", desc: "Reliable power backup, DG sets, and solar energy integration for remote off-grid towers." },
    { icon: <Wifi style={{ color: 'var(--color-accent-tower)' }} size={32} />, title: "Network O&M", desc: "24/7 active and passive monitoring with immediate structural repair services." }
  ];

  return (
    <div className="bg-pattern" style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '65vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img src="/images/telecom_towers_1790011421272.jpg" alt="Telecom Towers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.8)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ height: '2px', width: '40px', backgroundColor: 'var(--color-accent-tower)' }}></div>
              <span style={{ color: 'var(--color-accent-tower)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Division 02</span>
            </div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', color: 'white', marginBottom: '1rem', lineHeight: 1 }}>
              Telecom <br/><span style={{ color: 'var(--color-accent-tower)' }}>Towers</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '600px', lineHeight: 1.8, marginTop: '2rem' }}>
              Erecting high-quality network infrastructure to bridge the digital divide. We enable seamless, uninterrupted connectivity everywhere.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ padding: '8rem 1.5rem' }}>
        
        {/* Sticky Layout */}
        <div className="sticky-wrapper">
          
          <div className="sticky-col">
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Connecting the Unconnected</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              As India experiences an unprecedented digital boom, robust telecommunication infrastructure is more critical than ever. The demand for seamless mobile connectivity and smart city infrastructure is skyrocketing.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '3rem', lineHeight: 1.8 }}>
              369 AKR Universe specializes in the turnkey deployment and maintenance of telecom towers across dense urban centers and the most remote rural landscapes, partnering with leading Tier-1 operators.
            </p>
            
            <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-accent-tower)' }}>
              Partner With Us <ArrowRight size={20} />
            </Link>
          </div>

          <div className="scroll-col">
            {/* Case Study Mock */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-solid" style={{ padding: '3rem', borderTop: '4px solid var(--color-accent-tower)', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-tower)', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <LocateFixed size={18} /> Highlighted Capability
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>5G Rollout Integration</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Rapid site acquisition and structural strengthening of existing legacy towers to accommodate heavy 5G Active Antenna Units (AAU), ensuring operators meet aggressive launch timelines.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem', padding: '1rem', backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--radius-sm)' }}>
                  <Globe2 size={24} color="var(--color-accent-tower)" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Site Survey</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem', padding: '1rem', backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--radius-sm)' }}>
                  <Shield size={24} color="var(--color-accent-tower)" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Health Audit</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.5rem', padding: '1rem', backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--radius-sm)' }}>
                  <Wrench size={24} color="var(--color-accent-tower)" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>O&M Lifecycle</span>
                </div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {features.map((feat, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-solid" style={{ padding: '2rem' }}>
                  <div style={{ marginBottom: '1.5rem' }}>{feat.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-secondary)' }}>{feat.title}</h3>
                  <p style={{ color: 'var(--color-text-light)', fontSize: '1rem', lineHeight: 1.6 }}>{feat.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkTowers;
