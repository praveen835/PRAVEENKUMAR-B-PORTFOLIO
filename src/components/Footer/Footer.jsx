import './Footer.css';
import { personalData } from '../../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section dark-section" aria-label="Footer and Copyright">
      <div className="container footer-container">
        <div className="footer-identity">
          <span className="footer-name">{personalData.fullName}</span>
          <span className="footer-role">// {personalData.roleUpper}</span>
        </div>

        <div className="footer-meta">
          <span>{personalData.location.toUpperCase()}</span>
          <span>•</span>
          <span>&copy; 2026</span>
        </div>

        <button
          type="button"
          className="footer-back-to-top"
          onClick={scrollToTop}
          data-cursor="click"
          aria-label="Scroll back to top of page"
        >
          <span>BACK TO TOP</span>
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}
