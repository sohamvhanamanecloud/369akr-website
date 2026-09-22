import { motion } from 'framer-motion';
import { ArrowRight, Sun, BatteryCharging, Factory, Home as HomeIcon, LocateFixed, Leaf, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';

const Solar = () => {
  const features = [
    { icon: <Factory style={{ color: 'var(--color-accent-solar)' }} size={32} />, title: "Utility-Scale Farms", desc: "Design, engineering, and deployment of massive MW-scale ground-mounted solar plants." },
    { icon: <HomeIcon style={{ color: 'var(--color-accent-solar)' }} size={32} />, title: "Rooftop Solutions", desc: "Customized C&I rooftop integration to offset heavy industrial energy costs." },
    { icon: <BatteryCharging style={{ color: 'var(--color-accent-solar)' }} size={32} />, title: "Energy Storage", desc: "Advanced Battery Energy Storage Systems (BESS) for round-the-clock green power." },
    { icon: <Sun style={{ color: 'var(--color-accent-solar)' }} size={32} />, title: "O&M Services", desc: "Robotic cleaning and predictive maintenance to maximize solar panel efficiency." }
  ];

  return (
    <div className="bg-pattern" style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '65vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img src="/images/solar_energy_1790011454687.jpg" alt="Solar Energy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.7)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ height: '2px', width: '40px', backgroundColor: 'var(--color-accent-solar)' }}></div>
              <span style={{ color: 'var(--color-accent-solar)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Division 04</span>
            </div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', color: 'white', marginBottom: '1rem', lineHeight: 1 }}>
              Solar <br/><span style={{ color: 'var(--color-accent-solar)' }}>Energy</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#e2e8f0', maxWidth: '600px', lineHeight: 1.8, marginTop: '2rem' }}>
              Harnessing the immense power of the sun. We provide sustainable, innovative EPC solar energy solutions for a cleaner, carbon-neutral tomorrow.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ padding: '8rem 1.5rem' }}>
        
        {/* Sticky Layout */}
        <div className="sticky-wrapper">
          
          <div className="sticky-col">
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Renewable Energy Leadership</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Our legacy began with solar, and it remains the driving force behind 369 AKR Universe. We specialize in comprehensive solar EPC services, navigating complex regulatory environments to bring utility-scale energy projects to life.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '3rem', lineHeight: 1.8 }}>
              We leverage top-tier Tier-1 photovoltaic modules, advanced string inverters, and precision solar tracking systems. Our installations consistently deliver exceptional energy yields and long-term durability for our partners.
            </p>
            
            <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-accent-solar)', color: 'black' }}>
              Partner With Us <ArrowRight size={20} />
            </Link>
          </div>

          <div className="scroll-col">
            {/* Case Study Mock */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-solid" style={{ padding: '3rem', borderTop: '4px solid var(--color-accent-solar)', marginBottom: '2rem', backgroundColor: 'var(--color-primary)', color: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-solar)', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <LocateFixed size={18} /> Highlighted Capability
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Zero-Carbon Transition</h3>
              <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Every Megawatt of solar power we install significantly offsets fossil fuel dependence, preventing thousands of tonnes of CO2 emissions annually. We view every project as a direct investment in the planet's future with accelerated financial paybacks.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Leaf size={32} color="var(--color-accent-solar)" />
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>Environmental Impact</div>
                    <div style={{ fontSize: '0.9rem', color: '#94A3B8' }}>Massive CO2 offset</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <LineChart size={32} color="var(--color-accent-solar)" />
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>Economic Yield</div>
                    <div style={{ fontSize: '0.9rem', color: '#94A3B8' }}>Accelerated ROI</div>
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
      
      {/* Photo Gallery component */}
      <PhotoGallery images={["/images/solar_live.jpg", "/images/solar_energy_1790011454687.jpg"]} />
    </div>
  );
};

export default Solar;
