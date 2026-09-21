import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}
        >
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-primary)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
            Whether you have a project in mind, need expert infrastructure consultation, or want to join our team, we're here to help.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Contact Information</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(30, 58, 138, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin style={{ color: 'var(--color-primary)' }} size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Our Headquarters</h3>
                  <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>
                    Sube Singh X3-4624<br />
                    Rohtak, Haryana<br />
                    India 124001
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(30, 58, 138, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone style={{ color: 'var(--color-primary)' }} size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Call Us</h3>
                  <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>
                    +91 98120 37550<br />
                    +91 90509 37550
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(30, 58, 138, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail style={{ color: 'var(--color-primary)' }} size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>Email Us</h3>
                  <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>
                    info@369akruniverse.in
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="card-solid" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
                <CheckCircle2 size={64} style={{ color: 'var(--color-accent-ofc)', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Message Sent!</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem' }}>Thank you for reaching out. A member of our team will get back to you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-outline" style={{ marginTop: '2rem' }}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="firstName" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--color-text)' }}>First Name</label>
                    <input required type="text" id="firstName" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', outline: 'none', transition: 'border-color 0.2s' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="lastName" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--color-text)' }}>Last Name</label>
                    <input required type="text" id="lastName" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', outline: 'none' }} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--color-text)' }}>Email Address</label>
                  <input required type="email" id="email" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', outline: 'none' }} />
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--color-text)' }}>Subject</label>
                  <select required id="subject" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: 'white' }}>
                    <option value="">Select a topic</option>
                    <option value="railway">Railway Infrastructure</option>
                    <option value="telecom">Telecom Towers</option>
                    <option value="ofc">OFC Networks</option>
                    <option value="solar">Solar Energy Solutions</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--color-text)' }}>Message</label>
                  <textarea required id="message" rows={5} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }}>
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
            
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
