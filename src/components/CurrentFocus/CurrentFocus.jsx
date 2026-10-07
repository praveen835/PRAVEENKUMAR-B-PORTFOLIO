import './CurrentFocus.css';
import { currentFocusData } from '../../data/portfolio';

export default function CurrentFocus() {
  const tickerItems = [...currentFocusData.ticker, ...currentFocusData.ticker];

  return (
    <section className="current-focus-section dark-section" aria-label="Current Engineering Focus">
      <div className="container">
        <div className="focus-header-group">
          <span className="focus-label">// ACTIVE DIRECTION</span>
          <h2 className="focus-title">{currentFocusData.title}</h2>
          
          <div className="focus-keywords-row">
            {currentFocusData.keywords.map((kw, i) => (
              <span key={kw} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem' }}>
                <span className={`focus-keyword-item ${kw === 'PYTHON' || kw === 'AI' ? 'accent-focus' : ''}`}>
                  {kw}
                </span>
                {i < currentFocusData.keywords.length - 1 && (
                  <span className="focus-keyword-sep" aria-hidden="true">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Continuous Animated Kinetic Ticker */}
      <div className="focus-ticker-container" aria-hidden="true">
        <div className="focus-ticker-track">
          {tickerItems.map((item, idx) => (
            <div key={idx} className="ticker-item">
              <span>{item}</span>
              <span className="ticker-arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
