import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-pattern-border"></div>

      <div className="footer-content">
        <div className="footer-brand-header">
          <div className="brand-logo-container">
            <img 
              src="/images/logo.png" 
              alt="P. N. GADGIL & SONS" 
              className="brand-logo" 
            />
          </div>
          <p className="brand-subtext">Gold | Silver | Diamonds</p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h3 className="footer-heading">About Us</h3>
            <ul className="footer-links">
              <li><a href="#overview">Overview</a></li>
              <li><a href="#vision">Vision</a></li>
              <li><a href="#awards">Awards & Recognitions</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#investors">Investors</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Facts</h3>
            <ul className="footer-links">
              <li><a href="#journey">Journey of Gold</a></li>
              <li><a href="#weights">Weights and Measurements</a></li>
              <li><a href="#purity">Purity and quality</a></li>
              <li><a href="#offerings">What PNG offer to customers</a></li>
              <li><a href="#carat">Carat in Gold, Carat in Diamond</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Products</h3>
            <ul className="footer-links">
              <li><a href="#collections">Collections</a></li>
              <li><a href="#women">Women's Jewellery</a></li>
              <li><a href="#men">Men's Jewellery</a></li>
              <li><a href="#gold-rates">PNG Today's Gold Rates</a></li>
              <li><a href="#feedback">Feedback</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Careers</h3>
            <ul className="footer-links">
              <li><a href="#careers">Careers</a></li>
              <li><a href="#testimonials">Stories/Testimonials</a></li>
              <li><a href="#social">Social Connect</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#apply">Apply Online</a></li>
              <li><a href="#privacy">Privacy Policy & Disclaimer</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">For Media</h3>
            <ul className="footer-links">
              <li><a href="#press">Press Releases</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#csr">CSR</a></li>
              <li><a href="#csr-committee">To know more about CSR committee</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2026 P N Gadgil & Sons. All Rights Reserved. Site Designed, Developed & Maintained by P N Gadgil & Sons.</p>
        </div>
      </div>

      <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        ▲
      </button>
    </footer>
  );
};

export default Footer;

