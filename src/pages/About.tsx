const About = () => {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', backgroundColor: 'var(--color-background)' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
            Fueling India's Future
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
            Driving Growth Across Industries.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
          <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our Leadership</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text)' }}>
              Under the visionary leadership of our Chairman and Managing Director, <strong>Kanta Devi</strong>, 369 AKR Universe Private Limited has grown from its roots in solar energy to become a diversified infrastructure powerhouse.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', marginTop: '1rem' }}>
              We are committed to delivering excellence across all our projects, ensuring that we play a pivotal role in building a modern, connected, and sustainable India.
            </p>
          </div>

          <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Other Services</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                <span style={{ color: 'var(--color-accent-solar)' }}>✔</span> Scrap
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                <span style={{ color: 'var(--color-accent-solar)' }}>✔</span> Media
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                <span style={{ color: 'var(--color-accent-solar)' }}>✔</span> Transport
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                <span style={{ color: 'var(--color-accent-solar)' }}>✔</span> Canal, Roads and Bridges
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
