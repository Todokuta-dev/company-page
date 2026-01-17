import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left - Company Info */}
        <div className="footer-section">
          <h3 className="footer-logo">Moonhill Technology</h3>
          <p className="footer-tagline">
            Bridging the gap between tech and seamless innovation
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contacts">Contact</a></li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-contact">
            <p>📧 moonhilltechnology@gmail.com</p>
            <p>📞 +234 8146054187</p>
            <p>📍 Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="footer-bottom">
        <p>© 2026 Moonhill Technology. All rights reserved.</p>
      </div>
    </footer>
  );
}