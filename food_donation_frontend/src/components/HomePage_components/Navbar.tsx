import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">

          <Link to="/" className="logo">
            <span className="logo-text"><span>Food</span>Share</span>
          </Link>

          <div className="nav-links">
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="nav-link">How It Works</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="nav-link">About</a>
            <a href="#impact" onClick={(e) => handleNavClick(e, 'impact')} className="nav-link">Impact</a>
            <a href="#stories" onClick={(e) => handleNavClick(e, 'stories')} className="nav-link">Stories</a>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link cta">Get Started</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
