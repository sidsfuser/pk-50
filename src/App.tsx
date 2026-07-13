import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    notes: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill out Name and Email.');
      return;
    }
    // Simulate API request
    setSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navigation Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo-container" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
            <img src="/assets/logo.png" alt="PK-50 Logo" className="logo-img" />
          </div>
          
          {/* Desktop Menu */}
          <nav className="desktop-menu-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <ul className="nav-menu">
              <li><span className="nav-link" onClick={() => scrollToSection('home')}>Home</span></li>
              <li><span className="nav-link" onClick={() => scrollToSection('about')}>About PK</span></li>
              <li><span className="nav-link" onClick={() => scrollToSection('journey')}>Life Journey</span></li>
              <li><span className="nav-link" onClick={() => scrollToSection('entrepreneurship')}>Entrepreneurship</span></li>
              <li><span className="nav-link" onClick={() => scrollToSection('friendship')}>Friendship</span></li>
              <li><span className="nav-link" onClick={() => scrollToSection('celebration')}>Celebration</span></li>
            </ul>
            <button className="btn-join" onClick={() => scrollToSection('rsvp')}>
              Join The Party ★
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="hero" 
        style={{ backgroundImage: 'url("/assets/hero_banner_main.png")' }}
      >
        <div className="container" style={{ position: 'relative', height: '100%', width: '100%' }}>
          <button 
            className="hero-rsvp-btn glow-btn" 
            onClick={() => scrollToSection('rsvp')}
          >
            RSVP Now ★
          </button>
        </div>
      </section>

      {/* Quick Nav Shelf */}
      <section className="quick-nav-shelf">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <div className="quick-grid" style={{ flex: '1.5', minWidth: '300px' }}>
            <a className="quick-item" onClick={() => scrollToSection('journey')}>
              <span className="quick-icon">👶</span>
              <span className="quick-label">Childhood</span>
            </a>
            <a className="quick-item" onClick={() => scrollToSection('journey')}>
              <span className="quick-icon">👨‍👩‍👧‍👦</span>
              <span className="quick-label">Family</span>
            </a>
            <a className="quick-item" onClick={() => scrollToSection('entrepreneurship')}>
              <span className="quick-icon">📈</span>
              <span className="quick-label">Entrepreneurship</span>
            </a>
            <a className="quick-item" onClick={() => scrollToSection('friendship')}>
              <span className="quick-icon">🤝</span>
              <span className="quick-label">Friendship</span>
            </a>
            <a className="quick-item" onClick={() => scrollToSection('celebration')}>
              <span className="quick-icon">🏎️</span>
              <span className="quick-label">Cars & Rolex</span>
            </a>
          </div>
          <div className="quick-shelf-watches" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0.8', minWidth: '150px' }}>
            <img src="/assets/hero_watches_shelf_highres.png" alt="Rolex Watches" style={{ maxHeight: '60px', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* Life Journey Section */}
      <section id="journey" className="section-banner">
        <img src="/assets/journey_banner.png" alt="Life Journey" />
      </section>

      {/* Entrepreneurship Section */}
      <section id="entrepreneurship" className="section-banner">
        <img src="/assets/entrepreneurship_banner.png" alt="Entrepreneurship" />
      </section>

      {/* Passion, Rolex & Swag Sections */}
      <section id="celebration" className="section-banner">
        <img src="/assets/collection_banner.jpg" alt="Passion & Collection" />
      </section>

      {/* Friendship Section */}
      <section id="friendship" className="section-banner">
        <img src="/assets/friendship_banner.png" alt="Friendship" />
      </section>

      {/* RSVP & Save the Date Section */}
      <section id="rsvp" className="section" style={{ background: '#FAF8F5' }}>
        <div className="container">
          <div className="rsvp-grid">
            {/* Left side: Save the date */}
            <div className="rsvp-left" style={{ backgroundImage: 'url("/assets/save_the_date_bg.png")' }}>
              <div className="rsvp-left-overlay"></div>
              <div className="rsvp-left-content" style={{ textAlign: 'left' }}>
                <span className="section-tag" style={{ color: 'var(--gold)' }}>★ Save the Date ★</span>
                <h2 className="rsvp-title" style={{ fontSize: '48px', margin: '15px 0', color: 'var(--text-light)', lineHeight: '1.2' }}>
                  3 April 2027
                </h2>
                <h3 style={{ color: 'var(--gold)', letterSpacing: '4px', fontSize: '18px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  DALLAS, TEXAS
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.8' }}>
                  Join us for a memorable celebration filled with joy, laughter, and great memories as we honor Prabhu Karunakaran's golden milestone.
                </p>
                <div style={{ marginTop: '40px', width: '50px', height: '1px', background: 'var(--gold)' }}></div>
              </div>
            </div>
            
            {/* Right side: RSVP Form */}
            <div className="rsvp-right" style={{ textAlign: 'left' }}>
              {!submitted ? (
                <>
                  <h3 className="rsvp-title" style={{ margin: '0 0 5px 0' }}>You're Invited</h3>
                  <p className="rsvp-subtitle">TO CELEBRATE PK'S GOLDEN MILESTONE!</p>
                  
                  <form onSubmit={handleSubmit} className="rsvp-form">
                    <div className="rsvp-form-row">
                      <div className="form-group">
                        <label style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Full Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-input"
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          className="form-input"
                          placeholder="e.g. john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="rsvp-form-row">
                      <div className="form-group">
                        <label style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          className="form-input"
                          placeholder="e.g. +1 (123) 456-7890"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Number of Guests</label>
                        <select
                          name="guests"
                          className="form-input"
                          value={formData.guests}
                          onChange={handleInputChange}
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5+">5+ Guests</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Message / Notes</label>
                      <textarea
                        name="notes"
                        className="form-input"
                        placeholder="Share a wish or any special requests..."
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        style={{ resize: 'none' }}
                      />
                    </div>
                    
                    <button type="submit" className="btn-submit glow-btn">
                      JOIN THE CELEBRATION ★
                    </button>
                    
                    <p style={{ fontSize: '10px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '10px' }}>
                      We can't wait to celebrate with you in Dallas!
                    </p>
                  </form>
                </>
              ) : (
                <div className="rsvp-success">
                  <div className="success-icon">✨</div>
                  <h3 className="rsvp-title" style={{ color: 'var(--gold)', marginBottom: '15px' }}>Response Confirmed!</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '15px', marginBottom: '10px' }}>
                    Thank you, <strong>{formData.name}</strong>, for joining Prabhu Karunakaran's golden jubilee milestone!
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                    An invitation card and event details have been sent to <strong>{formData.email}</strong>.
                  </p>
                  <button
                    className="btn-join"
                    style={{ marginTop: '30px', background: 'transparent', color: 'var(--gold)', border: '1px solid var(--gold)' }}
                    onClick={() => setSubmitted(false)}
                  >
                    Edit RSVP Details
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-logo">
              <img src="/assets/logo.png" alt="PK-50 Logo" className="footer-logo-img" />
              <p style={{ color: 'var(--gold-light)', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>
                LOADED. TIMELESS. UNSTOPPABLE.
              </p>
            </div>
            
            <div className="footer-info">
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-light)', margin: 0 }}>
                FOLLOW, TEXAS ★ APRIL 3, 2027 ★ DALLAS, TEXAS
              </p>
              <p className="serif-title" style={{ fontSize: '16px', color: 'var(--gold)', margin: '5px 0 0 0' }}>
                Let's make unforgettable memories together!
              </p>
            </div>
            
            <div className="footer-social">
              <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', margin: '0 0 10px 0' }}>
                Follow The Journey
              </p>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
                  📸
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
                  👤
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="YouTube">
                  📺
                </a>
              </div>
            </div>
            
            <div className="footer-copyright">
              © 2027 PK-50 Celebration. All Rights Reserved. Designed with luxury and passion.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
