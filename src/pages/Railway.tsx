import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Train, Map, HardHat, ShieldCheck, Cog, Activity, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Railway = () => {
  const features = [
    { icon: <Map className="text-red-500" size={32} />, title: "Track Laying & Alignment", desc: "Precision engineering for high-speed and freight corridors, ensuring durability under maximum load conditions." },
    { icon: <HardHat className="text-red-500" size={32} />, title: "Civil Construction", desc: "Building bridges, tunnels, platforms, and foundational infrastructure across challenging geographic terrains." },
    { icon: <Train className="text-red-500" size={32} />, title: "Electrification", desc: "Modernizing networks with efficient Overhead Equipment (OHE) and robust power delivery systems." },
    { icon: <ShieldCheck className="text-red-500" size={32} />, title: "Safety Systems", desc: "Implementing advanced signaling, interlocking, and automated train protection grids." }
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
            <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '700px', lineHeight: 1.6 }}>
              Building the physical backbone of India's transport network. We engineer robust, high-capacity railway systems designed for unparalleled safety, speed, and efficiency.
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
              At 369 AKR Universe, our railway division is dedicated to expanding and modernizing India's vast rail network. The railway sector is the lifeline of the Indian economy, moving millions of passengers and millions of tonnes of freight daily. We understand the critical importance of uninterrupted, reliable rail transport.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: 1.8 }}>
              From challenging mountainous terrains to dense urban centers, our teams deliver world-class civil and structural engineering solutions. We partner with government authorities and private entities to ensure that freight and passenger lines are built to endure, utilizing the latest in automated construction technology, drone surveying, and sustainable practices.
            </p>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Our Strategic Approach</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {['End-to-end EPC (Engineering, Procurement, Construction) project management', 'Strict adherence to RDSO (Research Designs and Standards Organisation) guidelines', 'On-time delivery of critical infrastructure to minimize network disruption', 'Sustainable and eco-friendly construction methods using recycled aggregates'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.1rem', color: 'var(--color-secondary)' }}>
                  <CheckCircle2 style={{ color: 'var(--color-accent-railway)', flexShrink: 0, marginTop: '4px' }} /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Features & Stats Grid */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              {features.map((feat, i) => (
                <div key={i} className="card-solid" style={{ padding: '2rem' }}>
                  <div style={{ marginBottom: '1rem' }}>{feat.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>{feat.title}</h3>
                  <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* Micro-Stats */}
            <div className="card-solid" style={{ padding: '2rem', backgroundColor: 'var(--color-secondary)', color: 'white' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>Performance Indicators</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={18} color="var(--color-accent-railway)" /> Safety Record</span>
                  <span style={{ fontWeight: 'bold' }}>99.9% Incident-Free</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Cog size={18} color="var(--color-accent-railway)" /> Equipment Modernization</span>
                  <span style={{ fontWeight: 'bold' }}>100% Automated</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ArrowUpRight size={18} color="var(--color-accent-railway)" /> Project Delivery</span>
                  <span style={{ fontWeight: 'bold' }}>Ahead of Schedule</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginTop: '5rem', padding: '4rem', backgroundColor: 'var(--color-secondary)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Ready to partner on your next major rail project?</h2>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2rem' }}>Our engineering experts are ready to discuss your requirements, from surveying to execution.</p>
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-accent-railway)', color: 'white', border: 'none' }}>
            Get in Touch <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Railway;
