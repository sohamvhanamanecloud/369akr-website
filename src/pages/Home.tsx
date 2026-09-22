import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Train, RadioTower, Cable, Sun, BarChart3, Users, ShieldCheck, Globe, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';

const heroImages = [
  "/images/railway_infra_1790011408588.jpg",
  "/images/telecom_towers_1790011421272.jpg",
  "/images/solar_energy_1790011454687.jpg"
];

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const marqueeLogos = ["Govt of India", "NHAI", "RailTel", "PGCIL", "BSNL", "Adani Infra", "Tata Projects", "L&T Construction"];

  return (
    <div className="bg-pattern">
      {/* Premium Hero Section */}
      <section 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--color-secondary)'
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.div 
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ position: 'absolute', inset: 0, zIndex: 1, y }}
          >
            <img src={heroImages[currentImageIndex]} alt="Infrastructure" style={{ width: '100%', height: '120%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 100%)' }}></div>
          </motion.div>
        </AnimatePresence>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ maxWidth: '900px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ height: '2px', width: '40px', backgroundColor: 'var(--color-accent)' }}></div>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>EPC Infrastructure Conglomerate</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', color: 'white', marginBottom: '2rem', lineHeight: 1.05 }}>
              Engineering the <br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-surface)', WebkitTextFillColor: 'transparent' }}>Framework</span> of Tomorrow.
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: '#94A3B8', marginBottom: '3rem', maxWidth: '650px', lineHeight: 1.8 }}>
              369 AKR Universe executes massive-scale national infrastructure projects spanning Railways, Telecom Networks, Optical Fiber, and Renewable Energy.
            </p>
            
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>
                Discover Our Impact <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Marquee Strip */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...marqueeLogos, ...marqueeLogos].map((logo, index) => (
            <span key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', margin: '0 3rem', fontSize: '1.5rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Building2 size={24} /> {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Corporate Impact Metrics */}
      <section className="section bg-pattern-dark" style={{ borderBottom: '1px solid #1E293B', borderTop: '1px solid #1E293B' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
            {[
              { icon: <Globe />, value: 25, suffix: " States", label: "Operational Presence" },
              { icon: <BarChart3 />, value: 250, suffix: "+", label: "Projects Completed" },
              { icon: <Users />, value: 10, suffix: "K+", label: "Skilled Workforce" },
              { icon: <ShieldCheck />, value: 9001, suffix: " ISO", label: "Certified Quality" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'white' }}
              >
                <div style={{ color: 'var(--color-accent)' }}>{stat.icon}</div>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1 }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ color: '#94A3B8', fontSize: '1.1rem', fontWeight: 500 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid: Featured Capabilities */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--color-secondary)' }}>Strategic Capabilities</h2>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginTop: '1rem', lineHeight: 1.8 }}>
                We deliver turnkey EPC solutions across four critical sectors, driving the nation's economic growth and technological advancement.
              </p>
            </div>
            <Link to="/about" className="btn btn-outline">View Full Profile</Link>
          </div>

          <div className="bento-grid">
            {/* Large Card: Railway */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card-solid bento-item large" 
              style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '400px', backgroundImage: 'linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.6)), url(/images/railway_infra_1790011408588.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}
            >
              <Train size={48} style={{ color: 'var(--color-accent)' }} />
              <div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Railway Infrastructure</h3>
                <p style={{ fontSize: '1.1rem', color: '#CBD5E1', maxWidth: '500px', marginBottom: '2rem' }}>Heavy civil construction, track laying, and advanced electrification for high-speed transit networks.</p>
                <Link to="/railway" className="btn btn-primary">Explore Division <ArrowRight size={18} /></Link>
              </div>
            </motion.div>

            {/* Medium Card: Solar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-solid bento-item medium-alt" 
              style={{ padding: '3rem', minHeight: '400px' }}
            >
              <div style={{ marginBottom: '2rem', display: 'inline-block', padding: '1rem', backgroundColor: 'rgba(217, 119, 6, 0.1)', borderRadius: 'var(--radius-full)' }}>
                <Sun size={32} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Solar Energy</h3>
              <p style={{ color: 'var(--color-text-light)', marginBottom: 'auto', lineHeight: 1.6 }}>Utility-scale solar farms and industrial rooftop solutions driving the green transition.</p>
              <Link to="/solar" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700, marginTop: '2rem' }}>Learn More <ArrowRight size={18} /></Link>
            </motion.div>

            {/* Medium Card: Towers */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-solid bento-item medium" 
              style={{ padding: '3rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--color-secondary)' }}>Telecom Towers</h3>
                <RadioTower size={40} style={{ color: 'var(--color-accent-tower)' }} />
              </div>
              <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>Greenfield tower erection and 5G upgrades for tier-1 telecom operators.</p>
              <Link to="/network-towers" className="btn btn-outline" style={{ width: 'fit-content' }}>View Expertise</Link>
            </motion.div>

            {/* Medium Card: OFC */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card-solid bento-item medium" 
              style={{ padding: '3rem', backgroundColor: 'var(--color-primary)', color: 'white' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '2rem', color: 'white' }}>Optical Fiber (OFC)</h3>
                <Cable size={40} style={{ color: 'var(--color-accent-ofc)' }} />
              </div>
              <p style={{ color: '#CBD5E1', marginBottom: '2rem', fontSize: '1.1rem' }}>Laying the high-speed data backbone through complex urban and rural terrains.</p>
              <Link to="/ofc" className="btn btn-primary" style={{ width: 'fit-content', backgroundColor: 'var(--color-accent-ofc)' }}>View Expertise</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
