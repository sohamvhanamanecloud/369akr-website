import { motion } from 'framer-motion';
import { ArrowRight, Train, Map, HardHat, ShieldCheck, Activity, Cog, ArrowUpRight, LocateFixed } from 'lucide-react';
import { Link } from 'react-router-dom';

const Railway = () => {
  const features = [
    { icon: <Map className="text-red-500" size={32} />, title: "Track Laying", desc: "Precision engineering for high-speed and heavy-freight corridors." },
    { icon: <HardHat className="text-red-500" size={32} />, title: "Civil Construction", desc: "Building massive bridges, tunnels, and foundational infrastructure." },
    { icon: <Train className="text-red-500" size={32} />, title: "Electrification", desc: "Modernizing networks with efficient Overhead Equipment (OHE)." },
    { icon: <ShieldCheck className="text-red-500" size={32} />, title: "Safety Systems", desc: "Implementing advanced signaling and train protection grids." }
  ];

  return (
    <div className="bg-pattern" style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '65vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img src="/images/railway_infra_1790011408588.jpg" alt="Railway Infrastructure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.8)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ height: '2px', width: '40px', backgroundColor: 'var(--color-accent-railway)' }}></div>
              <span style={{ color: 'var(--color-accent-railway)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Division 01</span>
            </div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', color: 'white', marginBottom: '1rem', lineHeight: 1 }}>
              Railway <br/><span style={{ color: 'var(--color-accent-railway)' }}>Infrastructure</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '600px', lineHeight: 1.8, marginTop: '2rem' }}>
              Building the physical backbone of India's transport network. We engineer robust, high-capacity railway systems designed for unparalleled safety and efficiency.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ padding: '8rem 1.5rem' }}>
        
        {/* Sticky Layout */}
        <div className="sticky-wrapper">
          
          <div className="sticky-col">
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Connecting the Nation</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              At 369 AKR Universe, our railway division is dedicated to expanding and modernizing India's vast rail network. The railway sector is the lifeline of the Indian economy, moving millions of passengers and millions of tonnes of freight daily.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '3rem', lineHeight: 1.8 }}>
              From challenging mountainous terrains to dense urban centers, our teams deliver world-class civil and structural EPC solutions. We ensure that lines are built to endure, utilizing automated construction technology and drone surveying.
            </p>
            
            <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-accent-railway)' }}>
              Partner With Us <ArrowRight size={20} />
            </Link>
          </div>

          <div className="scroll-col">
            {/* Case Study Mock */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-solid" style={{ padding: '3rem', borderTop: '4px solid var(--color-accent-railway)', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-railway)', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <LocateFixed size={18} /> Highlighted Capability
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Dedicated Freight Corridors</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Executing heavy axle-load track linking and electrification for rapid freight movement. Our methodology reduces track-laying time by 30% while adhering strictly to RDSO standards.
              </p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-secondary)' }}>30%</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Faster Execution</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-secondary)' }}>Tier-1</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Equipment Used</div>
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

            {/* Micro-Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-solid" style={{ padding: '3rem', backgroundColor: 'var(--color-primary)', color: 'white', marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Operational Benchmarks</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><Activity size={24} color="var(--color-accent-railway)" /> Safety Record</span>
                  <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>99.9% Incident-Free</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><Cog size={24} color="var(--color-accent-railway)" /> Mechanization</span>
                  <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>100% Automated</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}><ArrowUpRight size={24} color="var(--color-accent-railway)" /> Delivery Metric</span>
                  <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Ahead of Schedule</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Railway;
