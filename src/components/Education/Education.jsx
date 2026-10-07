import './Education.css';
import { educationData } from '../../data/portfolio';
import SectionHeader from '../Common/SectionHeader';

export default function Education() {
  return (
    <section id="education" className="section education-section" aria-label="Academic Education">
      <div className="container">
        <SectionHeader
          number="06"
          label="ACADEMIC BACKGROUND"
          title="EDUCATION"
          subtitle="Theoretical and applied foundations in computer science, algorithmic systems, and artificial intelligence."
        />

        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div>
                <div className="edu-top-row">
                  <span className="edu-period">{edu.period}</span>
                  <span className="edu-score">{edu.score}</span>
                </div>

                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution">{edu.institution}</div>
              </div>

              <div>
                <div className="edu-coursework-title">
                  {idx === 0 ? '// CORE RELEVANT COURSEWORK' : '// FOCUS SUBJECTS'}
                </div>
                <div className="edu-coursework-pills">
                  {edu.coursework.map((course) => (
                    <span key={course} className="edu-course-pill">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
