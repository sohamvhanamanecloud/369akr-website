import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const faqs = [
    { q: "What sectors does 369 AKR Universe operate in?", a: "We primarily operate in Railway Infrastructure, Telecom Towers, OFC Networks, and Solar Energy. We also have diversified operations in Heavy Scrap, Media, Transport, and Canals/Roads." },
    { q: "Do you take on international projects?", a: "Currently, our operational focus and expertise are strictly dedicated to building and modernizing the core infrastructure across India." },
    { q: "How can I apply to become a vendor or sub-contractor?", a: "Please reach out to our procurement division at info@369akruniverse.in with your company profile and the specific sector you specialize in." },
    { q: "Where is your corporate headquarters located?", a: "Our corporate headquarters is located at Sube Singh X3-4624, Rohtak, Haryana 124001, India." }
  ];

  return (
    <div className="bg-pattern" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
              Let's Build the <span style={{ color: 'var(--color-accent)' }}>Future.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', lineHeight: 1.8 }}>
              Whether you are looking to partner on a massive infrastructure project or inquire about our services, our executive team is ready to assist you.
            </p>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
          
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-secondary)' }}>Corporate Office</h2>
            
            <div className="card-solid" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(217, 119, 6, 0.1)', padding: '1rem', borderRadius: 'var(--radius-full)' }}>
                  <MapPin size={24} color="var(--color-accent)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Headquarters</h3>
                  <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6 }}>Sube Singh X3-4624<br/>Rohtak, Haryana<br/>India 124001</p>
                </div>
              </div>
            </div>

            <div className="card-solid" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'rgba(217, 119, 6, 0.1)', padding: '1rem', borderRadius: 'var(--radius-full)' }}>
                  <Phone size={24} color="var(--color-accent)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--color-secondary)' }}>Phone</h3>
                  <p style={{ color: 'var(--color-text-light)' }}>+91 98120 37550 <br/> +91 90509 37550</p>
                </div>
              </div>
            </div>

            <div className="card-solid" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'rgba(217, 119, 6, 0.1)', padding: '1rem', borderRadius: 'var(--radius-full)' }}>
                  <Mail size={24} color="var(--color-accent)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--color-secondary)' }}>Email</h3>
                  <p style={{ color: 'var(--color-text-light)' }}>info@369akruniverse.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="card-solid" style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden' }}>
            
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
                <CheckCircle size={64} style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '2rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem' }}>Thank you for reaching out. Our team will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Send an Inquiry</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-secondary)' }}>First Name</label>
                    <input type="text" required style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E2E8F0', backgroundColor: 'var(--color-surface-alt)', outline: 'none' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Last Name</label>
                    <input type="text" required style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E2E8F0', backgroundColor: 'var(--color-surface-alt)', outline: 'none' }} />
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Email Address</label>
                  <input type="email" required style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E2E8F0', backgroundColor: 'var(--color-surface-alt)', outline: 'none' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Interest Area</label>
                  <select style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E2E8F0', backgroundColor: 'var(--color-surface-alt)', outline: 'none', cursor: 'pointer' }}>
                    <option>General Inquiry</option>
                    <option>Railway Infrastructure</option>
                    <option>Telecom Towers</option>
                    <option>OFC Networks</option>
                    <option>Solar Energy</option>
                    <option>Other Services</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Message</label>
                  <textarea required rows={4} style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E2E8F0', backgroundColor: 'var(--color-surface-alt)', outline: 'none', resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '1.25rem' }}>
                  Submit Inquiry <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: 'var(--color-secondary)' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="card-solid" style={{ overflow: 'hidden' }}>
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', textAlign: 'left', backgroundColor: 'transparent' }}
                >
                  <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-secondary)' }}>{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={20} color="var(--color-text-light)" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 2rem 1.5rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
