import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-fallback" style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backgroundColor: '#F3F1EB',
          color: '#0A0A0A',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            PRAVEENKUMAR BALAKRISHNAN
          </h1>
          <p style={{ color: '#737373', marginBottom: '1.5rem' }}>
            PYTHON DEVELOPER • AI • BACKEND
          </p>

          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              padding: '0.8rem 1.6rem',
              backgroundColor: '#0A0A0A',
              color: '#F3F1EB',
              border: 'none',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            RELOAD PORTFOLIO
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
