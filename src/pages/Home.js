import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">
          <h2>📚 NoteMaster Pro</h2>
        </div>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
      
      <div className="hero-section">
        <h1 className="hero-title">Welcome to NoteMaster Pro</h1>
        <p className="hero-subtitle">Your Ultimate Study Companion</p>
        
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Upload Notes</h3>
            <p>Organize and manage all your study materials in one place</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🧪</div>
            <h3>Generate Tests</h3>
            <p>Automatically create practice tests from your notes</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Track Progress</h3>
            <p>Monitor your learning journey and improve continuously</p>
          </div>
        </div>
        
        <div className="cta-buttons">
          <Link to="/signup" className="cta-primary">Get Started</Link>
          <Link to="/login" className="cta-secondary">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
