import React, { useState } from 'react';
import { submitRSVP } from './services/emailService';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    notes: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill out Name and Email.');
      return;
    }

    // Send thank you email (requires EmailJS configuration)
    const emailSent = await submitRSVP({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      guests: formData.guests,
      notes: formData.notes
    });

    if (emailSent) {
      console.log('Thank you email sent successfully');
    } else {
      console.log('Email not sent. Configure EmailJS to enable email sending.');
    }

    setSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Blur Overlay - only on mobile */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(3, 8, 18, 0.85)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 997,
        }} />
      )}

      {/* Mobile Menu Overlay - only on mobile */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '25px',
        }}>
          <span className="nav-link" onClick={() => scrollToSection('home')} style={{ fontSize: '18px', padding: '10px 0' }}>Home</span>
          <span className="nav-link" onClick={() => scrollToSection('about')} style={{ fontSize: '18px', padding: '10px 0' }}>About PK</span>
          <span className="nav-link" onClick={() => scrollToSection('journey')} style={{ fontSize: '18px', padding: '10px 0' }}>Life Journey</span>
          <span className="nav-link" onClick={() => scrollToSection('entrepreneurship')} style={{ fontSize: '18px', padding: '10px 0' }}>Entrepreneurship</span>
          <span className="nav-link" onClick={() => scrollToSection('friendship')} style={{ fontSize: '18px', padding: '10px 0' }}>Friendship</span>
          <span className="nav-link" onClick={() => scrollToSection('celebration')} style={{ fontSize: '18px', padding: '10px 0' }}>Celebration</span>
          <button className="btn-join" onClick={() => scrollToSection('rsvp')} style={{ marginTop: '15px' }}>
            Join The Party ★
          </button>
        </div>
      )}

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

          {/* Mobile Hamburger Menu Button */}
          <button
            className="hamburger-menu"
            onClick={toggleMobileMenu}
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'space-around',
              width: '30px',
              height: '25px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              zIndex: 1002,
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                width: '30px',
                height: '3px',
                background: 'var(--gold)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(8px, 8px)' : 'none',
              }}
            ></span>
            <span
              style={{
                width: '30px',
                height: '3px',
                background: 'var(--gold)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            ></span>
            <span
              style={{
                width: '30px',
                height: '3px',
                background: 'var(--gold)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'none',
              }}
            ></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="hero"
        style={{ backgroundImage: 'url("/assets/hero.png")', position: 'relative' }}
      >
        {/* Right-aligned text content overlay to match the mockup exactly */}
        <div className="hero-text-overlay-col" style={{
          position: 'absolute',
          top: '3%',
          right: '5%',
          width: '45%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 3,
          pointerEvents: 'none'
        }}>
          {/* PK-50 Title */}
          <h1 style={{
            fontSize: '7vw',
            fontWeight: '900',
            color: '#b81d24',
            margin: '0 0 5px 0',
            fontFamily: 'Outfit, sans-serif',
            letterSpacing: '1px',
            lineHeight: '1',
            textShadow: '1px 1px 2px rgba(255,255,255,0.6)'
          }}>
            PK-50 
          </h1>

          {/* LOADED. TIMELESS. UNSTOPPABLE. banner */}
          <div style={{
            borderTop: '2px solid #0e1626',
            borderBottom: '2px solid #0e1626',
            padding: '4px 10px',
            margin: '2px 0 6px 0',
            display: 'inline-block'
          }}>
            <p style={{
              fontSize: '1vw',
              color: '#0e1626',
              letterSpacing: '3px',
              fontWeight: '700',
              margin: '0',
              textTransform: 'uppercase',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              LOADED. TIMELESS. UNSTOPPABLE.
            </p>
          </div>

          {/* Little Red Star */}
          <div style={{ color: '#b81d24', fontSize: '1.2vw', margin: '2px 0' }}>★</div>

          {/* PRABHU KARUNAKARAN */}
          <h2 style={{
            fontSize: '2.8vw',
            fontWeight: '800',
            color: '#b81d24',
            margin: '2px 0',
            fontFamily: 'Outfit, sans-serif',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            textShadow: '1px 1px 1px rgba(255,255,255,0.5)'
          }}>
            Prabhu Karunakaran
          </h2>

          {/* TURNING 50 ON APRIL 3, 2027 */}
          <p style={{
            fontSize: '1.1vw',
            color: '#0e1626',
            fontWeight: '700',
            margin: '2px 0',
            textTransform: 'uppercase',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '1px'
          }}>
            Turning 50 on April 3, 2027
          </p>

          {/* DALLAS, TEXAS banner */}
          <p style={{
            fontSize: '1.2vw',
            color: '#0e1626',
            fontWeight: '700',
            margin: '2px 0 10px 0',
            textTransform: 'uppercase',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '2px'
          }}>
            <span style={{ color: '#b81d24', marginRight: '5px' }}>★</span> Dallas, Texas <span style={{ color: '#b81d24', marginLeft: '5px' }}>★</span>
          </p>

          {/* Join the Celebration */}
          <p style={{
            fontSize: '3.2vw',
            color: '#1a365d',
            fontFamily: 'Alex Brush, cursive',
            margin: '0',
            lineHeight: '1'
          }}>
            Join the Celebration
          </p>
        </div>

        {/* Transparent RSVP Button Overlay over the pre-rendered gold button */}
        {/* <button 
          className="hero-rsvp-btn glow-btn" 
          onClick={() => scrollToSection('rsvp')}
        >
          RSVP Now ★
        </button> */}
      </section>

      {/* Quick Nav Shelf with interactive icons and labels */}
      <div className="quick-nav-shelf">
        <div className="container">
          <div className="quick-grid">
            <div className="quick-item" onClick={() => scrollToSection('journey')}>
              <span className="quick-icon" style={{ fontSize: '20px' }}>🎓</span>
              <span className="quick-label">Childhood</span>
            </div>
            <div className="quick-item" onClick={() => scrollToSection('journey')}>
              <span className="quick-icon" style={{ fontSize: '20px' }}>👥</span>
              <span className="quick-label">Family</span>
            </div>
            <div className="quick-item" onClick={() => scrollToSection('entrepreneurship')}>
              <span className="quick-icon" style={{ fontSize: '20px' }}>📈</span>
              <span className="quick-label">Entrepreneurship</span>
            </div>
            <div className="quick-item" onClick={() => scrollToSection('friendship')}>
              <span className="quick-icon" style={{ fontSize: '20px' }}>🤝</span>
              <span className="quick-label">Friendship</span>
            </div>
            <div className="quick-item" onClick={() => scrollToSection('celebration')}>
              <span className="quick-icon" style={{ fontSize: '20px' }}>🚗</span>
              <span className="quick-label">Cars & Rolex</span>
            </div>
            <div className="quick-item" onClick={() => scrollToSection('rsvp')}>
              <span className="quick-icon" style={{ fontSize: '20px' }}>👑</span>
              <span className="quick-label">Join The Party</span>
            </div>
          </div>
        </div>
      </div>

      {/* Life Journey Section */}
      <section id="journey" className="section" style={{ background: '#eee5db', padding: '80px 0' }}>
        <div className="container">
          <div className="journey-grid" style={{ background: '#eee5db' }}>
            {/* Childhood Column */}
            <div className="journey-col-childhood">
              <div className="journey-content-wrapper">
                <div style={{ marginBottom: '25px' }}>
                  <span className="section-tag" style={{ color: 'var(--accent-red)', fontSize: '15px', letterSpacing: '2px' }}>1977 - 1995</span>
                  <h3 className="section-heading" style={{ fontSize: '28px', marginTop: '10px', marginBottom: '0', color: '#1a202c', fontFamily: 'Outfit, sans-serif' }}>Childhood</h3>
                </div>

                <div className="journey-row" style={{ alignItems: 'center', gap: '40px' }}>
                  <div className="journey-text" style={{ flex: '0 0 45%' }}>
                    <p className="quote-serif" style={{ color: '#1a202c', borderLeft: '3px solid var(--accent-red)', paddingLeft: '20px', fontStyle: 'italic', fontSize: '18px', lineHeight: '1.5', marginBottom: '25px' }}>
                      "Every great story starts with humble beginnings."
                    </p>
                    <p className="desc-text" style={{ color: '#666', fontSize: '20px', lineHeight: '1.8', marginBottom: '15px' }}>
                      Growing up with curiosity, determination, and dreams that never stopped growing.
                    </p>
                    <p className="desc-text" style={{ color: '#666', fontSize: '20px', lineHeight: '1.8' }}>
                      Prabhu's journey is one of resilience, hard work, and gratitude.
                    </p>
                  </div>

                  <div className="journey-visual" style={{ flex: '0 0 55%', display: 'flex', justifyContent: 'center' }}>
                    <img src="/assets/childhood.png" alt="Childhood photo collage" style={{ width: '100%', display: 'block', objectFit: 'contain', maxHeight: '350px' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Family Column */}
            <div className="journey-col-family">
              <div className="journey-content-wrapper">
                <div style={{ marginBottom: '25px' }}>
                  <span className="section-tag" style={{ color: 'var(--accent-red)', fontSize: '15px', letterSpacing: '2px' }}>FAMILY MILESTONE</span>
                  <h3 className="section-heading" style={{ fontSize: '28px', marginTop: '10px', marginBottom: '0', color: '#1a202c', fontFamily: 'Outfit, sans-serif' }}>Family</h3>
                </div>

                <div className="journey-row" style={{ alignItems: 'center', gap: '40px' }}>
                  <div className="journey-text" style={{ flex: '0 0 45%' }}>
                    <p className="quote-serif" style={{ color: '#1a202c', borderLeft: '3px solid var(--accent-red)', paddingLeft: '20px', fontStyle: 'italic', fontSize: '18px', lineHeight: '1.5', marginBottom: '25px' }}>
                      "The greatest success is not measured by business, but by family."
                    </p>
                    <p className="desc-text" style={{ color: '#666', fontSize: '20px', lineHeight: '1.8', marginBottom: '15px' }}>
                      A loving husband, a caring father, and the strength behind every achievement.
                    </p>
                    <p className="desc-text" style={{ color: '#666', fontSize: '20px', lineHeight: '1.8' }}>
                      His family has been the absolute anchor through all phases of life.
                    </p>
                  </div>

                  <div className="journey-visual" style={{ flex: '0 0 55%', display: 'flex', justifyContent: 'center' }}>
                    <img src="/assets/family.png" alt="Prabhu Karunakaran Family" style={{ width: '100%', display: 'block', objectFit: 'contain', maxHeight: '350px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurship Section */}
      {/* Entrepreneurship Section */}
      <section
        id="entrepreneurship"
        style={{
          width: "100%",
          background: "#eee5db",
          padding: "40px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <img
            src="/assets/enter.png"
            alt="Entrepreneurship"
            style={{
              width: "100%",
              display: "block",
              borderRadius: "8px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            }}
          />
        </div>
      </section>

      {/* Passion About Cars, Rolex & Swag Sections */}
      <section id="celebration" className="section" style={{ background: '#FAF8F5', padding: '80px 0' }}>
        <div className="container">
          <div className="celebration-grid">
            {/* Left column: Cars and Rolex */}
            <div style={{ flex: 1 }}>
              <img
                src="/assets/car%20and%20rolex.png"
                alt="Cars & Rolex"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "8px",
                }}
              />
            </div>

            {/* Right column: Swag Video Section */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px', textAlign: 'left' }}>
                <span className="section-tag" style={{ color: 'var(--accent-red)' }}>★ The Swag ★</span>
                <h2 className="section-heading" style={{ fontSize: '28px', color: 'var(--bg-primary)' }}>The Swag</h2>
                <p className="serif-title" style={{ color: '#666', fontSize: '20px', margin: '5px 0 0 0' }}>
                  Style is temporary. Class is permanent.
                </p>
              </div>

              <div className="img-frame" style={{ borderWidth: '4px', background: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <video
                  src="/assets/pk_video.mp4"
                  poster="/assets/thumbnail.png"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="swag-video"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '350px' }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Friendship Section - Full Width Banner */}
      <section id="friendship" style={{ padding: 0 }}>
        <img
          src="/assets/friendship.png"
          alt="Friendship"
          style={{
            width: "100%",
            display: "block",
            objectFit: "cover",
          }}
        />
      </section>

      {/* RSVP & Save the Date Section */}
      <section id="rsvp" className="section" style={{ background: '#FAF8F5', padding: '80px 0' }}>
        <div className="container">
          <div className="rsvp-grid">
            {/* Left side: Save the date */}
            <div className="rsvp-left" style={{ backgroundImage: 'url("/assets/bottom.png")' }}>
              <div className="rsvp-left-overlay" style={{ background: 'linear-gradient(135deg, rgba(253, 252, 247, 0.45) 0%, rgba(245, 242, 235, 0.65) 100%)' }}></div>
              <div className="rsvp-left-content" style={{ textAlign: 'left' }}>
                {/* <span className="section-tag" style={{ color: 'var(--accent-red)' }}>★ Save the Date ★</span> */}
                {/* <h2 className="rsvp-title" style={{ fontSize: '48px', margin: '15px 0', color: 'var(--bg-primary)', lineHeight: '1.2' }}>
                  3 April 2027
                </h2>
                <h3 style={{ color: 'var(--accent-red)', letterSpacing: '4px', fontSize: '18px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  DALLAS, TEXAS
                </h3>
                <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.8' }}>
                  Join us for a memorable celebration filled with joy, laughter, and great memories as we honor Prabhu Karunakaran's golden milestone.
                </p> */}
                <div style={{ marginTop: '40px', width: '50px', height: '1px', background: 'var(--accent-red)' }}></div>
              </div>
            </div>

            {/* Right side: RSVP Form */}
            <div className="rsvp-right" style={{ textAlign: 'left', background: '#fdfcf7' }}>
              {!submitted ? (
                <>
                  <h3 className="rsvp-title" style={{ margin: '0 0 5px 0', color: 'var(--bg-primary)' }}>You're Invited</h3>
                  <p className="rsvp-subtitle" style={{ color: 'var(--accent-red)' }}>TO CELEBRATE PK'S GOLDEN MILESTONE!</p>

                  <form onSubmit={handleSubmit} className="rsvp-form">
                    <div className="rsvp-form-row">
                      <div className="form-group">
                        <label style={{ fontSize: '15px', textTransform: 'uppercase', color: '#666' }}>Full Name</label>
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
                        <label style={{ fontSize: '15px', textTransform: 'uppercase', color: '#666' }}>Email Address</label>
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
                        <label style={{ fontSize: '15px', textTransform: 'uppercase', color: '#666' }}>Phone Number</label>
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
                        <label style={{ fontSize: '15px', textTransform: 'uppercase', color: '#666' }}>Number of Guests</label>
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
                      <label style={{ fontSize: '15px', textTransform: 'uppercase', color: '#666' }}>Message / Notes</label>
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

                    <p style={{ fontSize: '10px', color: '#888', textAlign: 'center', marginTop: '10px' }}>
                      We can't wait to celebrate with you in Dallas!
                    </p>
                  </form>
                </>
              ) : (
                <div className="rsvp-success" style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div className="success-icon" style={{ fontSize: '48px', color: 'var(--accent-red)', marginBottom: '15px' }}>✨</div>
                  <h3 className="rsvp-title" style={{ color: 'var(--bg-primary)', marginBottom: '15px' }}>Response Confirmed!</h3>
                  <p style={{ color: '#1a202c', fontSize: '15px', marginBottom: '10px' }}>
                    Thank you, <strong>{formData.name}</strong>, for joining Prabhu Karunakaran's golden jubilee milestone!
                  </p>
                  <p style={{ color: '#666', fontSize: '13px' }}>
                    An invitation card and event details have been sent to <strong>{formData.email}</strong>.
                  </p>
                  <button
                    className="btn-join"
                    style={{ marginTop: '30px', background: 'transparent', color: 'var(--accent-red)', border: '1px solid var(--accent-red)' }}
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

      {/* Footer Section - Professional & Visible */}
      <footer
        style={{
          width: "100%",
          padding: 0,
          margin: 0,
          background: "#02050c",
        }}
      >
        <img
          src="/assets/foot.png"
          alt="PK-50 Footer"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </footer>
    </>
  );
}

export default App;
