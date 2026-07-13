import React, { useState } from 'react';
import { submitRSVP, sendRSVPEmail } from './services/emailService';

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
          top: '23%',
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
        <button 
          className="hero-rsvp-btn glow-btn" 
          onClick={() => scrollToSection('rsvp')}
        >
          RSVP Now ★
        </button>
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
                  <span className="section-tag" style={{ color: 'var(--accent-red)', fontSize: '11px', letterSpacing: '2px' }}>1977 - 1995</span>
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
                  <span className="section-tag" style={{ color: 'var(--accent-red)', fontSize: '11px', letterSpacing: '2px' }}>FAMILY MILESTONE</span>
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
            display: 'flex',
            background: '#fdfcf7',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            {/* Left side text and details */}
            <div className="ent-left" style={{ flex: '0 0 55%', padding: '35px' }}>
              <span className="section-tag" style={{ color: 'var(--accent-red)', fontSize: '11px', letterSpacing: '2px', display: 'block', marginBottom: '8px', textAlign: 'left' }}>VISION & LEADERSHIP</span>
              <h2 className="section-heading" style={{ fontSize: '32px', color: '#0f2942', fontFamily: 'Outfit, sans-serif', fontWeight: '800', marginTop: '5px', marginBottom: '15px', textTransform: 'uppercase', textAlign: 'left' }}>Entrepreneurship</h2>
              
              <div style={{ color: 'var(--accent-red)', margin: '5px 0 20px 0', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '10px', textAlign: 'left' }}>★</div>
              
              <p style={{ color: '#0f2942', fontSize: '22px', fontWeight: '700', lineHeight: '1.6', marginBottom: '25px', textAlign: 'left', fontFamily: 'Outfit, sans-serif' }}>
                Founder & CEO of Exterprise Solutions – an award-winning enterprise technology firm helping businesses innovate, transform and grow.
              </p>
              
              {/* Bullets & Map sub-row */}
              <div className="ent-sub-row" style={{ display: 'flex', gap: '25px', alignItems: 'flex-start', textAlign: 'left' }}>
                {/* Bullets */}
                <div style={{ flex: '0 0 55%' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '18px', lineHeight: '1.5', color: '#4a5568', fontWeight: '600' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: '50%', border: '1.5px solid #d4af37', color: '#d4af37', fontSize: '9px', marginRight: '10px', fontWeight: 'bold', flexShrink: 0, marginTop: '2px' }}>✓</span>
                      Specializing in Digital Transformation, AI, Data & Analytics, Cloud, and Enterprise Solutions.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '18px', lineHeight: '1.5', color: '#4a5568', fontWeight: '600' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: '50%', border: '1.5px solid #d4af37', color: '#d4af37', fontSize: '9px', marginRight: '10px', fontWeight: 'bold', flexShrink: 0, marginTop: '2px' }}>✓</span>
                      Trusted by global clients to deliver scalable, future-ready solutions.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '18px', lineHeight: '1.5', color: '#4a5568', fontWeight: '600' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: '50%', border: '1.5px solid #d4af37', color: '#d4af37', fontSize: '9px', marginRight: '10px', fontWeight: 'bold', flexShrink: 0, marginTop: '2px' }}>✓</span>
                      Presence across 3 Continents – North America, Asia, and Australia.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '18px', lineHeight: '1.5', color: '#4a5568', fontWeight: '600' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: '50%', border: '1.5px solid #d4af37', color: '#d4af37', fontSize: '9px', marginRight: '10px', fontWeight: 'bold', flexShrink: 0, marginTop: '2px' }}>✓</span>
                      Supporting communities and people through mentorship, employment, and philanthropy.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', fontSize: '18px', lineHeight: '1.5', color: '#4a5568', fontWeight: '600' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: '50%', border: '1.5px solid #d4af37', color: '#d4af37', fontSize: '9px', marginRight: '10px', fontWeight: 'bold', flexShrink: 0, marginTop: '2px' }}>✓</span>
                      Believing in giving back and creating opportunities for all.
                    </li>
                  </ul>
                </div>
                
                {/* Map illustration */}
                <div style={{ flex: '0 0 45%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '10px', borderLeft: '1px solid rgba(0,0,0,0.05)' }}>
                  <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '2px', color: '#0f2942', fontWeight: 'bold', marginBottom: '4px' }}>Presence Across</span>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '3px', color: '#c41e3a', fontWeight: '800', marginBottom: '10px' }}>3 Continents</span>
                  <img src="/assets/presence_map.png" alt="Exterprise Global Presence Map" style={{ width: '100%', maxWidth: '220px', display: 'block', opacity: '0.85' }} />
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#666', fontWeight: 'bold', marginTop: '10px' }}>
                    <span>North America</span>
                    <span style={{ color: '#d4af37' }}>|</span>
                    <span>Asia</span>
                    <span style={{ color: '#d4af37' }}>|</span>
                    <span>Australia</span>
                  </div>
                </div>
              </div>
              
              {/* Stats Box at the bottom */}
              <div style={{ 
                border: '1.5px solid rgba(212, 175, 55, 0.4)', 
                borderRadius: '8px', 
                background: '#fdfcf7', 
                padding: '18px', 
                marginTop: '30px',
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '8px'
              }}>
                <div style={{ textAlign: 'center', borderRight: '1px solid rgba(212,175,55,0.2)' }}>
                  <h4 style={{ fontSize: '24px', color: '#0f2942', fontWeight: '800', margin: '0', fontFamily: 'Outfit, sans-serif' }}>25+</h4>
                  <p style={{ fontSize: '12px', textTransform: 'uppercase', color: '#666', letterSpacing: '1px', fontWeight: 'bold', margin: '5px 0 0 0' }}>Years of Leadership</p>
                </div>
                <div style={{ textAlign: 'center', borderRight: '1px solid rgba(212,175,55,0.2)' }}>
                  <h4 style={{ fontSize: '24px', color: '#0f2942', fontWeight: '800', margin: '0', fontFamily: 'Outfit, sans-serif' }}>500+</h4>
                  <p style={{ fontSize: '12px', textTransform: 'uppercase', color: '#666', letterSpacing: '1px', fontWeight: 'bold', margin: '5px 0 0 0' }}>Successful Projects</p>
                </div>
                <div style={{ textAlign: 'center', borderRight: '1px solid rgba(212,175,55,0.2)' }}>
                  <h4 style={{ fontSize: '24px', color: '#0f2942', fontWeight: '800', margin: '0', fontFamily: 'Outfit, sans-serif' }}>100+</h4>
                  <p style={{ fontSize: '12px', textTransform: 'uppercase', color: '#666', letterSpacing: '1px', fontWeight: 'bold', margin: '5px 0 0 0' }}>Happy Clients</p>
                </div>
                <div style={{ textAlign: 'center', borderRight: '1px solid rgba(212,175,55,0.2)' }}>
                  <h4 style={{ fontSize: '24px', color: '#0f2942', fontWeight: '800', margin: '0', fontFamily: 'Outfit, sans-serif' }}>3</h4>
                  <p style={{ fontSize: '12px', textTransform: 'uppercase', color: '#666', letterSpacing: '1px', fontWeight: 'bold', margin: '5px 0 0 0' }}>Continents Presence</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ fontSize: '24px', color: '#0f2942', fontWeight: '800', margin: '0', fontFamily: 'Outfit, sans-serif' }}>1</h4>
                  <p style={{ fontSize: '12px', textTransform: 'uppercase', color: '#666', letterSpacing: '1px', fontWeight: 'bold', margin: '5px 0 0 0' }}>Mission: People First</p>
                </div>
              </div>
            </div>
            
            {/* Right side single office workspace skyline image */}
            <div className="ent-right" style={{ flex: '0 0 45%', minHeight: '420px' }}>
              <img src="/assets/entrepreneurship_office.png" alt="Office Workspace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Passion About Cars, Rolex & Swag Sections */}
      <section id="celebration" className="section" style={{ background: '#FAF8F5', padding: '80px 0' }}>
        <div className="container">
          <div className="celebration-grid">
            {/* Left column: Cars and Rolex */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
               {/* Cars Subsection */}
               <div>
                 <div style={{ marginBottom: '30px', textAlign: 'left' }}>
                   <span className="section-tag" style={{ color: 'var(--accent-red)' }}>★ Passion About Cars ★</span>
                   <h2 className="section-heading" style={{ fontSize: '28px', color: 'var(--bg-primary)' }}>Passion About Cars</h2>
                   <p className="serif-title" style={{ color: '#666', fontSize: '20px', margin: '5px 0 0 0' }}>
                     "Cars are not machines. They're emotion. They're engineering. They're freedom."
                   </p>
                 </div>
                 
                 <div style={{ background: '#fdfcf7', border: '1px solid rgba(212,175,55,0.2)', padding: '10px', borderRadius: '4px' }}>
                   <img src="/assets/cars.png" alt="Car Collection" style={{ width: '100%', display: 'block', borderRadius: '4px' }} />
                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginTop: '12px' }}>
                     {CAR_LABELS.map((label, idx) => (
                       <div key={idx} style={{ textAlign: 'center' }}>
                         <p style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</p>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>

               {/* Rolex Subsection */}
               <div>
                 <div style={{ marginBottom: '30px', textAlign: 'left' }}>
                   <span className="section-tag" style={{ color: 'var(--accent-red)' }}>★ Love for Rolex ★</span>
                   <h2 className="section-heading" style={{ fontSize: '28px', color: 'var(--bg-primary)' }}>Love for Rolex</h2>
                   <p className="serif-title" style={{ color: '#666', fontSize: '20px', margin: '5px 0 0 0' }}>
                     Precision. Prestige. Performance. A symbol of excellence and timeless legacy.
                   </p>
                 </div>
                 
                 <div style={{ background: '#fdfcf7', border: '1px solid rgba(212,175,55,0.2)', padding: '10px', borderRadius: '4px' }}>
                   <img src="/assets/rolex.png" alt="Rolex Collection" style={{ width: '100%', display: 'block', borderRadius: '4px' }} />
                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '6px', marginTop: '12px' }}>
                     {WATCH_LABELS.map((watch, idx) => (
                       <div key={idx} style={{ textAlign: 'center' }}>
                         <p style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', lineHeight: '1.3' }}>{watch.name}</p>
                         <p style={{ fontSize: '14px', color: '#888', margin: '2px 0 0 0' }}>{watch.model}</p>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
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
      <section id="friendship" className="section" style={{ background: '#f5f0e8', padding: '0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '60px 20px' }}>
          {/* Left Side: Text and Icons */}
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            <div style={{ flex: '0 0 50%', position: 'relative' }}>
              {/* Decorative Balloons */}
              <div style={{ position: 'absolute', top: '-40px', left: '-20px', fontSize: '80px', zIndex: 1, lineHeight: 1 }}>🎈</div>
              <div style={{ position: 'absolute', top: '-20px', left: '40px', fontSize: '90px', zIndex: 0 }}>🎈</div>
              
              {/* Section Title */}
              <div style={{ marginBottom: '20px', paddingTop: '20px' }}>
                <h3 style={{ 
                  fontSize: '11px', 
                  fontWeight: '700', 
                  color: '#c41e3a', 
                  letterSpacing: '3px', 
                  textTransform: 'uppercase',
                  margin: '0 0 15px 0'
                }}>
                  LIFE'S GREATEST BOND
                </h3>
                <h2 style={{ 
                  fontSize: '48px', 
                  fontWeight: '900', 
                  color: '#1a365d', 
                  margin: '0 0 25px 0',
                  fontFamily: 'Outfit, sans-serif',
                  letterSpacing: '1px'
                }}>
                  Friendship
                </h2>
                
                {/* Red Line */}
                <div style={{ 
                  width: '40px', 
                  height: '3px', 
                  background: '#c41e3a', 
                  marginBottom: '25px' 
                }}></div>
                
                <p style={{ 
                  fontSize: '18px', 
                  color: '#2d3748', 
                  fontStyle: 'italic', 
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}>
                  "Friendship is life's greatest investment."
                </p>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#4a5568', 
                  lineHeight: '1.8',
                  marginBottom: '40px'
                }}>
                  Success is empty without people to share it with. Over the past five decades, Prabhu has built bonds that transcend distances and endure through time.
                </p>
              </div>
              
              {/* Icon Categories Row */}
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ 
                  flex: '0 0 130px', 
                  textAlign: 'center',
                  padding: '20px 15px',
                  background: '#fdfcf7',
                  border: '1px solid rgba(212,175,55,0.3)',
                  borderRadius: '4px'
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎓</div>
                  <div style={{ fontSize: '14px', color: '#2d3748', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: '1.5' }}>
                    COLLEGE<br />DAYS
                  </div>
                </div>
                
                <div style={{ 
                  flex: '0 0 130px', 
                  textAlign: 'center',
                  padding: '20px 15px',
                  background: '#fdfcf7',
                  border: '1px solid rgba(212,175,55,0.3)',
                  borderRadius: '4px'
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>💼</div>
                  <div style={{ fontSize: '14px', color: '#2d3748', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: '1.5' }}>
                    BUSINESS<br />PARTNERS
                  </div>
                </div>
                
                <div style={{ 
                  flex: '0 0 130px', 
                  textAlign: 'center',
                  padding: '20px 15px',
                  background: '#fdfcf7',
                  border: '1px solid rgba(212,175,55,0.3)',
                  borderRadius: '4px'
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>✈️</div>
                  <div style={{ fontSize: '14px', color: '#2d3748', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: '1.5' }}>
                    TRAVEL<br />MEMORIES
                  </div>
                </div>
                
                <div style={{ 
                  flex: '0 0 130px', 
                  textAlign: 'center',
                  padding: '20px 15px',
                  background: '#fdfcf7',
                  border: '1px solid rgba(212,175,55,0.3)',
                  borderRadius: '4px'
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎉</div>
                  <div style={{ fontSize: '14px', color: '#2d3748', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: '1.5' }}>
                    CELEBRATIONS
                  </div>
                </div>
                
                <div style={{ 
                  flex: '0 0 130px', 
                  textAlign: 'center',
                  padding: '20px 15px',
                  background: '#fdfcf7',
                  border: '1px solid rgba(212,175,55,0.3)',
                  borderRadius: '4px'
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>🏆</div>
                  <div style={{ fontSize: '14px', color: '#2d3748', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: '1.5' }}>
                    SUCCESS<br />TOGETHER
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side: Photo Collage */}
            <div style={{ flex: '0 0 50%', position: 'relative' }}>
              <div style={{ 
                position: 'relative',
                padding: '20px',
                background: '#fff',
                border: '3px solid #d4af37',
                borderRadius: '8px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="/assets/friendship_collage.png" 
                  alt="Friendship Collage" 
                  style={{ 
                    width: '100%', 
                    display: 'block',
                    borderRadius: '4px'
                  }} 
                />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP & Save the Date Section */}
      <section id="rsvp" className="section" style={{ background: '#FAF8F5', padding: '80px 0' }}>
        <div className="container">
          <div className="rsvp-grid">
            {/* Left side: Save the date */}
            <div className="rsvp-left" style={{ backgroundImage: 'url("/assets/save_the_date_bg.png")' }}>
              <div className="rsvp-left-overlay" style={{ background: 'linear-gradient(135deg, rgba(253, 252, 247, 0.45) 0%, rgba(245, 242, 235, 0.65) 100%)' }}></div>
              <div className="rsvp-left-content" style={{ textAlign: 'left' }}>
                <span className="section-tag" style={{ color: 'var(--accent-red)' }}>★ Save the Date ★</span>
                <h2 className="rsvp-title" style={{ fontSize: '48px', margin: '15px 0', color: 'var(--bg-primary)', lineHeight: '1.2' }}>
                  3 April 2027
                </h2>
                <h3 style={{ color: 'var(--accent-red)', letterSpacing: '4px', fontSize: '18px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  DALLAS, TEXAS
                </h3>
                <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.8' }}>
                  Join us for a memorable celebration filled with joy, laughter, and great memories as we honor Prabhu Karunakaran's golden milestone.
                </p>
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
                        <label style={{ fontSize: '11px', textTransform: 'uppercase', color: '#666' }}>Full Name</label>
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
                        <label style={{ fontSize: '11px', textTransform: 'uppercase', color: '#666' }}>Email Address</label>
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
                        <label style={{ fontSize: '11px', textTransform: 'uppercase', color: '#666' }}>Phone Number</label>
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
                        <label style={{ fontSize: '11px', textTransform: 'uppercase', color: '#666' }}>Number of Guests</label>
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
                      <label style={{ fontSize: '11px', textTransform: 'uppercase', color: '#666' }}>Message / Notes</label>
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
      <footer style={{ 
        background: '#02050c', 
        padding: '50px 0 30px 0',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
          {/* Top Section with 3 columns */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.2fr 1.5fr 1fr',
            gap: '60px',
            marginBottom: '35px',
            alignItems: 'center' 
          }}>
            {/* Left: Logo */}
            <div>
              <img src="/assets/logo.png" alt="PK-50 Logo" style={{ height: '50px', display: 'block', marginBottom: '12px' }} />
              <p style={{ 
                color: 'var(--gold-light)', 
                fontSize: '11px', 
                letterSpacing: '2px', 
                textTransform: 'uppercase',
                margin: 0,
                fontWeight: '500'
              }}>
                LOADED. TIMELESS. UNSTOPPABLE.
              </p>
            </div>
            
            {/* Center: Event Info */}
            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                fontSize: '13px', 
                textTransform: 'uppercase', 
                letterSpacing: '2px', 
                color: 'var(--text-light)',
                margin: '0 0 12px 0',
                fontWeight: '600'
              }}>
                FOLLOW, TEXAS ★ APRIL 3, 2027 ★ DALLAS, TEXAS
              </p>
              <p className="serif-title" style={{ 
                fontSize: '18px', 
                color: 'var(--gold)', 
                margin: '0',
                fontStyle: 'italic'
              }}>
                Let's make unforgettable memories together!
              </p>
            </div>
            
            {/* Right: Social Links */}
            <div>
              <p style={{ 
                fontSize: '11px', 
                textTransform: 'uppercase', 
                letterSpacing: '2px', 
                color: 'var(--text-muted)',
                margin: '0 0 15px 0',
                textAlign: 'right',
                fontWeight: '600'
              }}>
                Follow The Journey
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end' }}>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram" style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid var(--gold-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)',
                  textDecoration: 'none',
                  fontSize: '18px',
                  transition: 'all 0.3s',
                  background: 'rgba(212, 175, 55, 0.05)'
                }}>
                  📸
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook" style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid var(--gold-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)',
                  textDecoration: 'none',
                  fontSize: '18px',
                  transition: 'all 0.3s',
                  background: 'rgba(212, 175, 55, 0.05)'
                }}>
                  👤
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="YouTube" style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid var(--gold-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)',
                  textDecoration: 'none',
                  fontSize: '18px',
                  transition: 'all 0.3s',
                  background: 'rgba(212, 175, 55, 0.05)'
                }}>
                  📺
                </a>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div style={{ 
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)',
            margin: '25px 0'
          }}></div>
          
          {/* Copyright */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.4)', 
              fontSize: '12px',
              margin: 0,
              letterSpacing: '0.5px'
            }}>
              © 2027 PK-50 Celebration. All Rights Reserved. Designed with luxury and passion.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
