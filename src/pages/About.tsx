import { motion } from 'framer-motion';
import { Target, Compass, Award, ShieldCheck, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <ShieldCheck size={28} className="text-blue-600" />, title: "Uncompromising Quality", desc: "We adhere strictly to global engineering standards, ensuring every project is built to last generations." },
    { icon: <Zap size={28} className="text-amber-500" />, title: "Relentless Execution", desc: "Time is critical in infrastructure. We leverage automation and modern project management to deliver ahead of schedule." },
    { icon: <Users size={28} className="text-emerald-500" />, title: "Community First", desc: "Our projects are designed to uplift local communities by creating jobs, improving connectivity, and ensuring safety." },
    { icon: <Award size={28} className="text-purple-500" />, title: "Integrity & Transparency", desc: "We operate with complete financial and operational transparency with our partners, stakeholders, and clients." }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      
      {/* Header Section */}
      <div className="container" style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', color: 'var(--color-secondary)', letterSpacing: '-0.02em' }}>
            Fueling India's <span style={{ color: 'var(--color-accent)' }}>Future</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
            Since our incorporation in 2021, 369 AKR Universe Private Limited has rapidly emerged as a diversified infrastructure powerhouse, driving exponential growth across the nation's most critical sectors.
          </p>
        </motion.div>
      </div>

      <div className="container">
        {/* Mission & Vision Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-solid" style={{ padding: '3rem', borderTop: '4px solid var(--color-primary)' }}>
            <Target size={40} style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Our Mission</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
              To engineer, build, and maintain the fundamental physical and digital infrastructure that empowers Indian enterprises and citizens. We strive to execute complex projects safely, sustainably, and with unparalleled technical precision.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-solid" style={{ padding: '3rem', borderTop: '4px solid var(--color-accent)' }}>
            <Compass size={40} style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Our Vision</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
              To be recognized as India's most trusted and innovative EPC (Engineering, Procurement, and Construction) conglomerate, setting new global benchmarks in renewable energy, telecommunications, and transport networks.
            </p>
          </motion.div>
        </div>

        {/* Leadership & History */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '5rem', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Visionary Leadership</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Under the dynamic leadership of our Chairman and Managing Director, <strong>Kanta Devi</strong>, and Director <strong>Ravinder Kumar</strong>, 369 AKR Universe was established with a clear mandate: to modernize India's core infrastructure.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
              Registered in Rohtak, Haryana, the company began its journey by tackling complex real estate and civil engineering challenges. Recognizing the shifting needs of a rapidly developing economy, our leadership strategically diversified operations into Solar Energy, Optical Fiber Networks, Telecom Towers, and Railway Construction.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="card-solid" style={{ padding: '3rem', backgroundColor: 'var(--color-secondary)', color: 'white' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'white' }}>Diversified Operations</h2>
            <p style={{ color: '#CBD5E1', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Beyond our primary infrastructure verticals, our operational capabilities extend to:</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></div> Heavy Scrap Processing
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></div> Media & Communications
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></div> Logistics & Transport Fleet
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></div> Canals, Roads & Bridges
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: 'var(--color-secondary)' }}>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {values.map((val, idx) => (
              <div key={idx} className="card-solid" style={{ padding: '2.5rem' }}>
                <div style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--radius-full)' }}>
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>{val.title}</h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
