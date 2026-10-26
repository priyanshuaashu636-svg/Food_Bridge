function AboutUs() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-tag" style={{ margin: '0 auto 12px' }}>About Us</div>
        <h2 className="section-title">Bridging Surplus Food to Those in Need</h2>
        <p className="section-sub">
          FoodShare is an intelligent food donation and redistribution platform connecting generous donors with verified charities, shelters, and passionate volunteers across communities.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To eliminate hunger and eradicate preventable food waste by leveraging technology to match surplus food with local communities in real-time.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>
              A future where nutritious food never ends up in a landfill while anyone goes to bed hungry. One connected ecosystem for social good.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🤝</div>
            <h3>Verified & Transparent</h3>
            <p>
              Every recipient organization and volunteer goes through strict identity and document verification, ensuring your donation directly reaches real people.
            </p>
          </div>
        </div>

        <div className="about-highlight-box">
          <div className="about-highlight-content">
            <h3>Why Food Donation Matters</h3>
            <p>
              Over 40% of produced food is wasted globally, while millions suffer from hunger. With real-time logistics, temperature-sensitive alerts, and community-driven delivery, we ensure surplus food from events, restaurants, and homes reaches hungry bellies safely and quickly.
            </p>
          </div>
          <div className="about-highlight-stats">
            <div className="highlight-pill">
              <span className="pill-num">0%</span>
              <span className="pill-text">Platform Fees</span>
            </div>
            <div className="highlight-pill">
              <span className="pill-num">100%</span>
              <span className="pill-text">Verified NGOs</span>
            </div>
            <div className="highlight-pill">
              <span className="pill-num">&lt;2 hrs</span>
              <span className="pill-text">Avg. Pickup Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

