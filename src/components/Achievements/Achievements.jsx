import './Achievements.css';
import { achievementsData } from '../../data/portfolio';
import SectionHeader from '../Common/SectionHeader';
import AnimatedCounter from '../Common/AnimatedCounter';

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements-section" aria-label="Key Quantitative Milestones">
      <div className="container">
        <SectionHeader
          number="05"
          label="QUANTITATIVE MILESTONES"
          title="ACHIEVEMENTS"
          subtitle="Measurable indicators of algorithmic problem-solving discipline and academic dedication."
        />

        <div className="achievements-grid">
          {achievementsData.map((item) => (
            <div key={item.id} className="achievement-card" data-cursor="explore">
              <div
                className={`achievement-number-wrap ${item.id === 'leetcode' || item.id === 'cgpa' ? 'accent-text' : ''}`}
              >
                <AnimatedCounter
                  target={item.value}
                  isDecimal={Boolean(item.isDecimal)}
                  suffix={item.suffix}
                  duration={2200}
                />
              </div>

              <div>
                <h3 className="achievement-label">{item.label}</h3>
                <p className="achievement-subtext">{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
