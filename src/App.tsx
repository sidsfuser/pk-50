import React, { useState } from 'react';
import { submitRSVP } from './services/emailService';

// Car labels for the single cars.png image
const CAR_LABELS = ['CLASSIC MUSCLE', 'FERRARI 488', 'ROLLS-ROYCE CULLINAN', 'LAMBORGHINI HURACÁN', 'MUSTANG GT'];

// Watch labels for the single rolex.png image
const WATCH_LABELS = [
  { name: 'DATEJUST 41', model: 'Oystersteel' },
  { name: 'SUBMARINER', model: 'Green' },
  { name: 'DAYTONA', model: 'Yellow' },
  { name: 'GMT-MASTER II', model: 'Batman' },
  { name: 'YACHT-MASTER', model: 'Platinum' },
  { name: 'SKY-DWELLER', model: 'Blue' }
];

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
      <section id="entrepreneurship" className="section" style={{ background: '#eee5db', padding: '60px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '68% 32%',
            background: '#FFFDF8',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
          }}>
            {/* Left side text and details */}
            <div style={{ padding: '40px' }}>
              <span className="section-tag" style={{ color: 'var(--accent-red)', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '10px', textAlign: 'left' }}>VISION & LEADERSHIP</span>
              <h2 style={{ fontSize: '40px', color: '#183153', fontFamily: 'Outfit, sans-serif', fontWeight: '900', marginTop: '5px', marginBottom: '8px', textTransform: 'uppercase', textAlign: 'left', lineHeight: '1.1' }}>
                Entrepreneurship
              </h2>

              <div style={{ width: '40px', height: '3px', background: '#B22222', margin: '15px 0 20px 0' }}></div>
              
              <p style={{ color: '#183153', fontSize: '20px', fontWeight: '700', lineHeight: '1.5', marginBottom: '30px', textAlign: 'left', fontFamily: 'Outfit, sans-serif' }}>
                Founder & CEO of Exterprise Solutions – an award-winning enterprise technology firm helping businesses innovate, transform and grow.
              </p>
              
              {/* Bullets & Map sub-row */}
              <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', textAlign: 'left' }}>
                {/* Bullets */}
                <div style={{ flex: '0 0 52%' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '16px', lineHeight: '1.5', color: '#4a5568', fontWeight: '600' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #D4AF37', color: '#D4AF37', fontSize: '10px', marginRight: '12px', fontWeight: 'bold', flexShrink: 0, marginTop: '2px', background: '#fff' }}>✓</span>
                      Specializing in Digital Transformation, AI, Data & Analytics, Cloud, and Enterprise Solutions.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '16px', lineHeight: '1.5', color: '#4a5568', fontWeight: '600' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #D4AF37', color: '#D4AF37', fontSize: '10px', marginRight: '12px', fontWeight: 'bold', flexShrink: 0, marginTop: '2px', background: '#fff' }}>✓</span>
                      Trusted by global clients to deliver scalable, future-ready solutions.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '16px', lineHeight: '1.5', color: '#4a5568', fontWeight: '600' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #D4AF37', color: '#D4AF37', fontSize: '10px', marginRight: '12px', fontWeight: 'bold', flexShrink: 0, marginTop: '2px', background: '#fff' }}>✓</span>
                      Presence across 3 Continents – North America, Asia, and Australia.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '16px', lineHeight: '1.5', color: '#4a5568', fontWeight: '600' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #D4AF37', color: '#D4AF37', fontSize: '10px', marginRight: '12px', fontWeight: 'bold', flexShrink: 0, marginTop: '2px', background: '#fff' }}>✓</span>
                      Supporting communities and people through mentorship, employment, and philanthropy.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '16px', lineHeight: '1.5', color: '#4a5568', fontWeight: '600' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #D4AF37', color: '#D4AF37', fontSize: '10px', marginRight: '12px', fontWeight: 'bold', flexShrink: 0, marginTop: '2px', background: '#fff' }}>✓</span>
                      Believing in giving back and creating opportunities for all.
                    </li>
                  </ul>
                </div>

                {/* Vertical Divider */}
                <div style={{ width: '1px', background: '#E9D7A8', margin: '0 30px' }}></div>

                {/* Map illustration */}
                <div style={{ flex: '0 0 48%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <p style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', color: '#183153', fontWeight: '700', marginBottom: '5px' }}>
                    PRESENCE ACROSS
                  </p>
                  <h4 style={{ fontSize: '28px', color: '#B22222', fontWeight: '800', letterSpacing: '4px', margin: '0 0 20px 0' }}>
                    3 CONTINENTS
                  </h4>
                  <img src="/assets/presence_map.png" alt="Exterprise Global Presence Map" style={{ width: '100%', maxWidth: '280px', display: 'block' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '20px', fontWeight: '700', fontSize: '15px', letterSpacing: '1px' }}>
                    <span style={{ color: '#183153' }}>NORTH AMERICA</span>
                    <span style={{ color: '#183153' }}>ASIA</span>
                    <span style={{ color: '#183153' }}>AUSTRALIA</span>
                  </div>
                </div>
              </div>
              
              {/* Stats Box at the bottom */}
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                border: '1.5px solid #D6B15B',
                marginTop: '35px',
                borderRadius: '8px',
                padding: '18px 10px',
                background: '#FFFDF8'
              }}>
                <div style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #E3D5AF' }}>
                  <h4 style={{ fontSize: '44px', color: '#183153', fontWeight: '800', margin: '0', fontFamily: 'Outfit, sans-serif', lineHeight: '1' }}>25+</h4>
                  <p style={{ fontSize: '13px', textTransform: 'uppercase', color: '#666', letterSpacing: '1px', fontWeight: '700', margin: '8px 0 0 0' }}>Years of<br />Leadership</p>
                </div>
                <div style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #E3D5AF' }}>
                  <h4 style={{ fontSize: '44px', color: '#183153', fontWeight: '800', margin: '0', fontFamily: 'Outfit, sans-serif', lineHeight: '1' }}>500+</h4>
                  <p style={{ fontSize: '13px', textTransform: 'uppercase', color: '#666', letterSpacing: '1px', fontWeight: '700', margin: '8px 0 0 0' }}>Successful<br />Projects</p>
                </div>
                <div style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #E3D5AF' }}>
                  <h4 style={{ fontSize: '44px', color: '#183153', fontWeight: '800', margin: '0', fontFamily: 'Outfit, sans-serif', lineHeight: '1' }}>100+</h4>
                  <p style={{ fontSize: '13px', textTransform: 'uppercase', color: '#666', letterSpacing: '1px', fontWeight: '700', margin: '8px 0 0 0' }}>Happy<br />Clients</p>
                </div>
                <div style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #E3D5AF' }}>
                  <h4 style={{ fontSize: '44px', color: '#183153', fontWeight: '800', margin: '0', fontFamily: 'Outfit, sans-serif', lineHeight: '1' }}>3</h4>
                  <p style={{ fontSize: '13px', textTransform: 'uppercase', color: '#666', letterSpacing: '1px', fontWeight: '700', margin: '8px 0 0 0' }}>Continents<br />Presence</p>
                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <h4 style={{ fontSize: '44px', color: '#183153', fontWeight: '800', margin: '0', fontFamily: 'Outfit, sans-serif', lineHeight: '1' }}>1</h4>
                  <p style={{ fontSize: '13px', textTransform: 'uppercase', color: '#666', letterSpacing: '1px', fontWeight: '700', margin: '8px 0 0 0' }}>Mission:<br />People First</p>
                </div>
              </div>
            </div>
            
            {/* Right side single office workspace skyline image */}
            <div style={{ height: '100%' }}>
              <img 
                src="/assets/entrepreneurship_office.png" 
                alt="Office Workspace" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  display: 'block',
                  objectPosition: 'center'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Passion About Cars, Rolex & Swag Sections */}
      <section id="celebration" className="section" style={{ background: '#FAF8F5', padding: '80px 0' }}>
        <div className="container">
          <div className="celebration-grid">
            {/* Left column: Cars and Rolex */}
            <div style={{ flex: 1 }}>
              <img
                src="assets\car and rolex.png"
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
          src="assets\friendship.png"
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
          src="/assets/footer.png"
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
