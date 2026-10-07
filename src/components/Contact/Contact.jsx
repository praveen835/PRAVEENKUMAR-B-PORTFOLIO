import './Contact.css';
import { personalData } from '../../data/portfolio';

export default function Contact() {
  const socials = [
    { name: 'LINKEDIN', url: personalData.socials.linkedin },
    { name: 'GITHUB', url: personalData.socials.github },
    { name: 'LEETCODE', url: personalData.socials.leetcode },
    { name: 'CODECHEF', url: personalData.socials.codechef },
  ];

  return (
    <section id="contact" className="contact-section dark-section" aria-label="Contact and Social Presence">
      <div className="container">
        <div className="contact-layout">
          {/* Monumental Typography */}
          <div className="contact-hero-text">
            <span className="contact-eyebrow">// TRANSMISSION & CONTACT</span>
            <div className="contact-massive-line">LET&apos;S</div>
            <div className="contact-massive-line accent">BUILD</div>
            <div className="contact-massive-line outline">SOMETHING.</div>
          </div>

          {/* Details Column */}
          <div className="contact-details-col">
            <p className="contact-support-text">
              Have a project, opportunity, or idea? Let&apos;s connect.
            </p>

            {/* Direct Email Card */}
            <a
              href={`mailto:${personalData.email}`}
              className="contact-email-card"
              data-cursor="click"
              aria-label={`Send direct email to ${personalData.email}`}
            >
              <span className="contact-email-label">// DIRECT DISPATCH</span>
              <div className="contact-email-link">
                <span>{personalData.email}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>

            {/* Coding & Professional Networks */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--secondary-dark)', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                // PROFILES & PLATFORMS
              </div>
              <div className="contact-socials-grid">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    data-cursor="click"
                  >
                    <span>{item.name}</span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
