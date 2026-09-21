import { motion } from 'framer-motion';
import { Target, Compass, Award, ShieldCheck, Users, Zap, Briefcase, FileCheck, CheckCircle2 } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <ShieldCheck size={28} style={{ color: 'var(--color-accent)' }} />, title: "Uncompromising Quality", desc: "We adhere strictly to global engineering standards, ensuring every project is built to last generations." },
    { icon: <Zap size={28} style={{ color: 'var(--color-accent)' }} />, title: "Relentless Execution", desc: "Time is critical in infrastructure. We leverage automation and modern project management to deliver ahead of schedule." },
    { icon: <Users size={28} style={{ color: 'var(--color-accent)' }} />, title: "Community First", desc: "Our projects are designed to uplift local communities by creating jobs, improving connectivity, and ensuring safety." },
    { icon: <Award size={28} style={{ color: 'var(--color-accent)' }} />, title: "Integrity & Transparency", desc: "We operate with complete financial and operational transparency with our partners, stakeholders, and clients." }
  ];

  return (
    <div className="bg-pattern" style={{ minHeight: '100vh', paddingTop: '140px', paddingBottom: '80px' }}>
      
      {/* Header Section */}
      <div className="container" style={{ textAlign: 'center', marginBottom: '8rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ height: '2px', width: '40px', backgroundColor: 'var(--color-accent)' }}></div>
            <span style={{ color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Corporate Profile</span>
            <div style={{ height: '2px', width: '40px', backgroundColor: 'var(--color-accent)' }}></div>
          </div>
          <h1 style={{ fontSize: 'clamp(3.5rem, 5vw, 5.5rem)', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>
            Fueling India's <span style={{ color: 'var(--color-text-light)' }}>Future</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
            Since our incorporation in 2021, 369 AKR Universe Private Limited has rapidly emerged as a diversified infrastructure powerhouse, driving exponential growth across the nation's most critical sectors.
          </p>
        </motion.div>
      </div>

      <div className="container">
        {/* Sticky Layout for Mission/Vision/History */}
        <div className="sticky-wrapper" style={{ marginBottom: '8rem' }}>
          
          <div className="sticky-col">
            <h2 style={{ fontSize: '3.5rem', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Strategic Vision</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Under the dynamic leadership of our Chairman and Managing Director, <strong>Kanta Devi</strong>, and Director <strong>Ravinder Kumar</strong>, 369 AKR Universe was established with a clear mandate: to modernize India's core infrastructure.
            </p>
            <div className="card-solid" style={{ padding: '2.5rem', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <FileCheck size={28} color="var(--color-accent)" />
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>ISO Certified</h3>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '1rem' }}>Committed to the highest global standards in Quality Management, Environmental Safety, and Occupational Health.</p>
            </div>
          </div>

          <div className="scroll-col">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-solid" style={{ padding: '3rem', borderTop: '4px solid var(--color-accent)' }}>
              <Target size={40} style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Our Mission</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
                To engineer, build, and maintain the fundamental physical and digital infrastructure that empowers Indian enterprises and citizens. We strive to execute complex projects safely, sustainably, and with unparalleled technical precision.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-solid" style={{ padding: '3rem', borderTop: '4px solid var(--color-primary)' }}>
              <Compass size={40} style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Our Vision</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
                To be recognized as India's most trusted and innovative EPC (Engineering, Procurement, and Construction) conglomerate, setting new global benchmarks in renewable energy, telecommunications, and transport networks.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-solid" style={{ padding: '3rem' }}>
              <Briefcase size={40} style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Diversified Operations</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>Beyond our primary infrastructure verticals, our operational capabilities actively extend to:</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {['Heavy Scrap Processing', 'Media & Communications', 'Logistics & Transport Fleet', 'Canals, Roads & Bridges'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)', fontWeight: 500 }}>
                    <CheckCircle2 size={18} color="var(--color-accent)" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>

        {/* Core Values */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '4rem', color: 'var(--color-secondary)' }}>Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {values.map((val, idx) => (
              <div key={idx} className="card-solid" style={{ padding: '3rem', textAlign: 'center' }}>
                <div style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1.5rem', backgroundColor: 'var(--color-surface-alt)', borderRadius: 'var(--radius-full)' }}>
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>{val.title}</h3>
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
