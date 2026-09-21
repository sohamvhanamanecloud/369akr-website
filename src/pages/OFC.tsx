import { motion } from 'framer-motion';
import { ArrowRight, Cable, Network, Shield, Pickaxe, LocateFixed, Server, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const OFC = () => {
  const features = [
    { icon: <Pickaxe style={{ color: 'var(--color-accent-ofc)' }} size={32} />, title: "Trenching & Laying", desc: "Expert excavation, ducting, and laying using HDD and micro-trenching techniques." },
    { icon: <Cable style={{ color: 'var(--color-accent-ofc)' }} size={32} />, title: "Splicing & Testing", desc: "Precision optical splicing and OTDR testing to ensure zero-loss data transmission." },
    { icon: <Network style={{ color: 'var(--color-accent-ofc)' }} size={32} />, title: "Network Architecture", desc: "Designing scalable national backbones and dense last-mile FTTH connectivity." },
    { icon: <Shield style={{ color: 'var(--color-accent-ofc)' }} size={32} />, title: "O&M Services", desc: "Continuous operations, preventive maintenance, and rapid fault restoration." }
  ];

  return (
    <div className="bg-pattern" style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '65vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img src="/images/ofc_networks_1790011434623.jpg" alt="OFC Networks" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.8)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ height: '2px', width: '40px', backgroundColor: 'var(--color-accent-ofc)' }}></div>
              <span style={{ color: 'var(--color-accent-ofc)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Division 03</span>
            </div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', color: 'white', marginBottom: '1rem', lineHeight: 1 }}>
              OFC <br/><span style={{ color: 'var(--color-accent-ofc)' }}>Networks</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '600px', lineHeight: 1.8, marginTop: '2rem' }}>
              Laying the optical fiber backbone for a high-speed Digital India. We build the vital arteries of modern communication and enterprise data.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ padding: '8rem 1.5rem' }}>
        
        {/* Sticky Layout */}
        <div className="sticky-wrapper">
          
          <div className="sticky-col">
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Powering the Digital Revolution</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Optical Fiber Cable (OFC) networks are the invisible foundation of the modern internet, cloud computing, and digital banking. 369 AKR Universe undertakes massive OFC laying projects to facilitate uninterrupted, ultra-high-speed broadband connectivity.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '3rem', lineHeight: 1.8 }}>
              Using state-of-the-art Horizontal Directional Drilling (HDD) and micro-trenching techniques, we minimize surface disruption in urban areas while laying thousands of kilometers of secure fiber along national highways.
            </p>
            
            <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-accent-ofc)' }}>
              Partner With Us <ArrowRight size={20} />
            </Link>
          </div>

          <div className="scroll-col">
            {/* Case Study Mock */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-solid" style={{ padding: '3rem', borderTop: '4px solid var(--color-accent-ofc)', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-ofc)', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <LocateFixed size={18} /> Highlighted Capability
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Hyperscale Interconnectivity</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Engineering redundant, low-latency dark fiber rings connecting major data centers. We manage the complete Right of Way (RoW) acquisition process, ensuring zero regulatory bottlenecks.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Server size={32} color="var(--color-accent-ofc)" />
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Data Centers</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Direct dark fiber links</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Settings size={32} color="var(--color-accent-ofc)" />
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-secondary)' }}>RoW Management</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Seamless municipal approvals</div>
                  </div>
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

export default OFC;
