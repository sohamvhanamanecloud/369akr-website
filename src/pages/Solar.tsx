import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sun, BatteryCharging, Factory, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solar = () => {
  const features = [
    { icon: <Factory style={{ color: 'var(--color-accent-solar)' }} size={32} />, title: "Utility-Scale Farms", desc: "Design and deployment of massive MW-scale solar power plants." },
    { icon: <HomeIcon style={{ color: 'var(--color-accent-solar)' }} size={32} />, title: "Rooftop Solutions", desc: "Commercial and residential rooftop solar panel integration." },
    { icon: <BatteryCharging style={{ color: 'var(--color-accent-solar)' }} size={32} />, title: "Energy Storage", desc: "Advanced battery systems for uninterrupted green power supply." },
    { icon: <Sun style={{ color: 'var(--color-accent-solar)' }} size={32} />, title: "O&M", desc: "Comprehensive operations and maintenance to maximize panel efficiency." }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '60vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img src="/images/solar_energy_1790011454687.jpg" alt="Solar Energy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem' }}>
              369 AKR <span style={{ color: 'var(--color-accent-solar)' }}>Universe</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '600px', lineHeight: 1.6 }}>
              Harnessing the power of the sun. We provide sustainable, innovative solar energy solutions for a cleaner, greener tomorrow.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          {/* Main Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Renewable Energy Leadership</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Our legacy began with solar, and it remains a core pillar of our group. 369 AKR Universe specializes in end-to-end solar EPC (Engineering, Procurement, and Construction) services.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: 1.8 }}>
              We are dedicated to helping businesses and communities transition to carbon-neutral operations. Our state-of-the-art solar installations consistently deliver high yields and long-term durability.
            </p>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Turnkey EPC project execution', 'High-efficiency monocrystalline panels', 'Grid-tied and off-grid solutions', 'Smart monitoring via IoT'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--color-secondary)' }}>
                  <CheckCircle2 style={{ color: 'var(--color-accent-solar)', flexShrink: 0 }} /> {item}
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
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Transition to clean energy today.</h2>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2rem' }}>Discover how much you can save with a customized solar installation.</p>
          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-accent-solar)', color: 'black', border: 'none' }}>
            Request a Consultation <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Solar;
