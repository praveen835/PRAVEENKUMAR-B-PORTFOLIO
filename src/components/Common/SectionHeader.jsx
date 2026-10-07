export default function SectionHeader({
  number,
  label,
  title,
  subtitle,
  className = '',
  light = false
}) {
  return (
    <div className={`section-header ${light ? 'dark-section' : ''} ${className}`}>
      <div className="section-label">
        {number && <span style={{ opacity: 0.6 }}>[{number}]</span>}
        <span>{label}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p style={{ maxWidth: '680px', marginTop: '0.5rem', color: light ? 'var(--secondary-dark)' : 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
