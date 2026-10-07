import { useState, useEffect } from 'react';
import './Navigation.css';
import { personalData } from '../../data/portfolio';

const DESKTOP_LINKS = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'WORK', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

const MOBILE_LINKS = [
  { num: '01', name: 'HOME', href: '#home' },
  { num: '02', name: 'ABOUT', href: '#about' },
  { num: '03', name: 'SKILLS', href: '#skills' },
  { num: '04', name: 'PROJECTS', href: '#projects' },
  { num: '05', name: 'EXPERIENCE', href: '#experience' },
  { num: '06', name: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="nav-header">
        <div className="container nav-container">
          <a
            href="#home"
            className="nav-brand"
            data-cursor="click"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
          >
            <span>{personalData.fullName}</span>
            <span className="nav-brand-tag">[PYTHON]</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop-links" aria-label="Main Navigation">
            {DESKTOP_LINKS.map((link) => {
              const isActive =
                activeSection === link.href.substring(1) ||
                (link.href === '#projects' && activeSection === 'projects');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  data-cursor="click"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`nav-burger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            data-cursor="click"
          >
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: 0 }}>
          <div className="mobile-nav-links">
            {MOBILE_LINKS.map((link) => (
              <div key={link.name} className="mobile-nav-item">
                <span className="mobile-nav-num">{link.num}</span>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>

          <div className="mobile-nav-footer">
            <div>COIMBATORE, INDIA // {personalData.yearSpan}</div>
            <div>{personalData.email}</div>
          </div>
        </div>
      </div>
    </>
  );
}
