import { Link } from 'react-router-dom';

function Footer() {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '14px' }}>
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="20" fill="url(#footer-logo-grad)" />
                <path d="M20 10L25 15H22V25H18V15H15L20 10Z" fill="white" />
                <path d="M12 28H28V30H12V28Z" fill="white" />
              </svg>
              <span style={{ marginLeft: '10px', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '20px', color: '#fff' }}>FoodShare</span>
            </div>
            <p>Connecting surplus food with people in need while reducing food waste across India.</p>
          </div>

          <div className="footer-col">
            <h3>Platform</h3>
            <a href="#how-it-works" onClick={(e) => scrollTo(e, 'how-it-works')}>How It Works</a>
            <Link to="/signup">Donate Food</Link>
            <Link to="/signup">Request Food</Link>
            <Link to="/signup">Volunteer</Link>
          </div>

          <div className="footer-col">
            <h3>Company</h3>
            <a href="#about" onClick={(e) => scrollTo(e, 'about')}>About Us</a>
            <a href="#impact" onClick={(e) => scrollTo(e, 'impact')}>Impact</a>
            <a href="#stories" onClick={(e) => scrollTo(e, 'stories')}>Stories</a>
            <Link to="/login">Sign In</Link>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 FoodShare. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#about" onClick={(e) => scrollTo(e, 'about')}>Privacy Policy</a>
            <a href="#about" onClick={(e) => scrollTo(e, 'about')}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
