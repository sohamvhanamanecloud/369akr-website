import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Link as LinkIcon, Globe, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-secondary)', color: 'white', padding: '5rem 2rem 2rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        
        {/* Company Info */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
            369AKR <span style={{ color: 'var(--color-accent)' }}>GROUP</span>
          </h2>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
            Pioneering robust infrastructure solutions across Railways, Telecom, OFC, and Renewable Energy for a stronger India.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'var(--color-text-light)' }}><Globe size={20} /></a>
            <a href="#" style={{ color: 'var(--color-text-light)' }}><MessageCircle size={20} /></a>
            <a href="#" style={{ color: 'var(--color-text-light)' }}><LinkIcon size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'white' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/about" style={{ color: 'var(--color-text-light)' }}>About Us</Link></li>
            <li><Link to="/railway" style={{ color: 'var(--color-text-light)' }}>Railway Projects</Link></li>
            <li><Link to="/network-towers" style={{ color: 'var(--color-text-light)' }}>Telecom Towers</Link></li>
            <li><Link to="/ofc" style={{ color: 'var(--color-text-light)' }}>OFC Infrastructure</Link></li>
            <li><Link to="/solar" style={{ color: 'var(--color-text-light)' }}>Solar Energy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'white' }}>Contact Us</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-light)' }}>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <MapPin size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
              <span>Sube Singh X3-4624 Rohtak, Haryana India 124001</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <Phone size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <span>+91 98120 37550 / +91 90509 37550</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <Mail size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <span>info@369akruniverse.in</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'var(--color-text-light)', fontSize: '0.875rem' }}>
        <p>&copy; {new Date().getFullYear()} 369 AKR GROUP. All Rights Reserved.</p>
        <p>Engineered for Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
