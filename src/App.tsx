import React, { useState } from 'react';

// List of cars (5 cars in revised mockup)
const CARS = [
  { id: 1, name: 'Classic Muscle', image: '/assets/car_strip_1.png', year: 'Vintage' },
  { id: 2, name: 'Ferrari 488', image: '/assets/car_strip_2.png', year: 'Sport' },
  { id: 3, name: 'Rolls-Royce Cullinan', image: '/assets/car_strip_3.png', year: 'Luxury' },
  { id: 4, name: 'Lamborghini Huracán', image: '/assets/car_strip_4.png', year: 'Supercar' },
  { id: 5, name: 'Mustang GT', image: '/assets/car_strip_5.png', year: 'Modern Muscle' },
];

// List of watches (6 watches in revised mockup)
const WATCHES = [
  { id: 1, name: 'Datejust 41', image: '/assets/watch_strip_1.png', model: 'Oystersteel & Gold' },
  { id: 2, name: 'Submariner', image: '/assets/watch_strip_2.png', model: 'Green Dial "Hulk"' },
  { id: 3, name: 'Daytona', image: '/assets/watch_strip_3.png', model: 'Yellow Gold / Black' },
  { id: 4, name: 'GMT-Master II', image: '/assets/watch_strip_4.png', model: 'Batman / Pepsi' },
  { id: 5, name: 'Yacht-Master', image: '/assets/watch_strip_5.png', model: 'Platinum Dial' },
  { id: 6, name: 'Sky-Dweller', image: '/assets/watch_strip_6.png', model: 'Blue Dial / Gold' },
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
                    <p className="desc-text" style={{ color: '#666', fontSize: '14px', lineHeight: '1.8', marginBottom: '15px' }}>
                      Growing up with curiosity, determination, and dreams that never stopped growing.
                    </p>
                    <p className="desc-text" style={{ color: '#666', fontSize: '14px', lineHeight: '1.8' }}>
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
                    <p className="desc-text" style={{ color: '#666', fontSize: '14px', lineHeight: '1.8', marginBottom: '15px' }}>
                      A loving husband, a caring father, and the strength behind every achievement.
                    </p>
                    <p className="desc-text" style={{ color: '#666', fontSize: '14px', lineHeight: '1.8' }}>
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
      <section id="entrepreneurship" className="section" style={{ background: '#FAF8F5', padding: '80px 0' }}>
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag" style={{ color: 'var(--accent-red)', fontSize: '12px', letterSpacing: '3px', display: 'block', marginBottom: '15px' }}>
              VISION & LEADERSHIP
            </span>
            <h2 className="section-heading" style={{ fontSize: '42px', color: '#1a202c', fontFamily: 'Outfit, sans-serif', fontWeight: 700, margin: 0 }}>
              Entrepreneurship
            </h2>
          </div>
          
          {/* Content Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '70px', marginBottom: '60px' }}>
            {/* Left column - first 3 items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent-red)', fontSize: '20px', lineHeight: '1', flexShrink: 0 }}>★</span>
                <p style={{ color: '#1a202c', fontSize: '13px', lineHeight: '1.7', margin: 0, opacity: 0.9 }}>
                  Founder & CEO of Exterprise Solutions - an award-winning enterprise technology firm helping businesses innovate, transform and grow.
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent-red)', fontSize: '20px', lineHeight: '1', flexShrink: 0 }}>★</span>
                <p style={{ color: '#1a202c', fontSize: '13px', lineHeight: '1.7', margin: 0, opacity: 0.9 }}>
                  Specializing in Digital Transformation, AI, Data & Analytics, Cloud, and Enterprise Solutions.
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent-red)', fontSize: '20px', lineHeight: '1', flexShrink: 0 }}>★</span>
                <p style={{ color: '#1a202c', fontSize: '13px', lineHeight: '1.7', margin: 0, opacity: 0.9 }}>
                  Trusted by global clients to deliver scalable, future-ready solutions.
                </p>
              </div>
            </div>
            
            {/* Right column - next 3 items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent-red)', fontSize: '20px', lineHeight: '1', flexShrink: 0 }}>★</span>
                <p style={{ color: '#1a202c', fontSize: '13px', lineHeight: '1.7', margin: 0, opacity: 0.9 }}>
                  Presence across 3 Continents - North America, Asia, and Australia.
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent-red)', fontSize: '20px', lineHeight: '1', flexShrink: 0 }}>★</span>
                <p style={{ color: '#1a202c', fontSize: '13px', lineHeight: '1.7', margin: 0, opacity: 0.9 }}>
                  Supporting communities and people through mentorship, employment, and philanthropy.
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent-red)', fontSize: '20px', lineHeight: '1', flexShrink: 0 }}>★</span>
                <p style={{ color: '#1a202c', fontSize: '13px', lineHeight: '1.7', margin: 0, opacity: 0.9 }}>
                  Believing in giving back and creating opportunities for all.
                </p>
              </div>
            </div>
          </div>
          
          {/* Map and Office Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            {/* Left: Map */}
            <div>
              <p style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', color: '#1a202c', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
                PRESENCE ACROSS 3 CONTINENTS
              </p>
              <div style={{ position: 'relative' }}>
                <img src="/assets/presence_map.png" alt="Exterprise Global Presence Map" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
            
            {/* Right: Office Image */}
            <div>
              <div className="img-frame" style={{ borderWidth: '4px', borderColor: 'var(--gold)', boxShadow: '0 12px 36px rgba(0,0,0,0.15)', borderRadius: '8px', overflow: 'hidden', background: '#fff' }}>
                <img src="/assets/entrepreneurship_office.png" alt="Office Workspace" style={{ width: '100%', display: 'block' }} />
              </div>
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
                  <p className="serif-title" style={{ color: '#666', fontSize: '14px', margin: '5px 0 0 0' }}>
                    "Cars are not machines. They're emotion. They're engineering. They're freedom."
                  </p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }} className="grid-mobile-stack">
                  {CARS.map((car) => (
                    <div key={car.id} className="item-card" style={{ background: '#fdfcf7', border: '1px solid rgba(212,175,55,0.2)', padding: '10px' }}>
                      <div className="item-img-container" style={{ height: '70px', overflow: 'hidden', borderRadius: '4px' }}>
                        <img src={car.image} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ marginTop: '8px', textAlign: 'center' }}>
                        <h4 style={{ fontSize: '10px', color: 'var(--bg-primary)', margin: 0, fontWeight: 'bold' }}>{car.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rolex Subsection */}
              <div>
                <div style={{ marginBottom: '30px', textAlign: 'left' }}>
                  <span className="section-tag" style={{ color: 'var(--accent-red)' }}>★ Love for Rolex ★</span>
                  <h2 className="section-heading" style={{ fontSize: '28px', color: 'var(--bg-primary)' }}>Love for Rolex</h2>
                  <p className="serif-title" style={{ color: '#666', fontSize: '14px', margin: '5px 0 0 0' }}>
                    Precision. Prestige. Performance. A symbol of excellence and timeless legacy.
                  </p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }} className="grid-mobile-stack">
                  {WATCHES.map((watch) => (
                    <div key={watch.id} className="item-card" style={{ background: '#fdfcf7', border: '1px solid rgba(212,175,55,0.2)', padding: '8px' }}>
                      <div className="item-img-container" style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={watch.image} alt={watch.name} style={{ maxHeight: '100%', objectFit: 'contain' }} />
                      </div>
                      <div style={{ marginTop: '8px', textAlign: 'center' }}>
                        <h4 style={{ fontSize: '9px', color: 'var(--bg-primary)', margin: 0, fontWeight: 'bold' }}>{watch.name}</h4>
                        <p style={{ fontSize: '8px', color: '#888', margin: 0 }}>{watch.model.split(' ')[0]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: Swag Video Section */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '30px', textAlign: 'left' }}>
                <span className="section-tag" style={{ color: 'var(--accent-red)' }}>★ The Swag ★</span>
                <h2 className="section-heading" style={{ fontSize: '28px', color: 'var(--bg-primary)' }}>The Swag</h2>
                <p className="serif-title" style={{ color: '#666', fontSize: '14px', margin: '5px 0 0 0' }}>
                  Style is temporary. Class is permanent.
                </p>
              </div>
              
              <div className="img-frame" style={{ borderWidth: '4px', background: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <video 
                  src="/assets/pk_video.mp4" 
                  poster="/assets/swag.png" 
                  controls 
                  className="swag-video" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '350px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Friendship Section */}
      <section id="friendship" className="section" style={{ background: '#FAF8F5', padding: '80px 0' }}>
        <div className="container">
          <div className="friend-wrapper">
            <div className="friend-left" style={{ textAlign: 'left' }}>
              <span className="section-tag" style={{ color: 'var(--accent-red)' }}>Life's Greatest Bond</span>
              <h2 className="section-heading" style={{ fontSize: '36px', color: 'var(--bg-primary)', marginBottom: '20px' }}>
                Friendship
              </h2>
              <p className="quote-serif" style={{ color: '#1a202c', borderLeft: '2px solid var(--accent-red)' }}>"Friendship is life's greatest investment."</p>
              <p className="desc-text" style={{ color: '#4a5568', marginBottom: '25px' }}>
                Success is empty without people to share it with. Over the past five decades, Prabhu has built bonds that transcend distances and endure through time.
              </p>
              
              <div className="friend-categories">
                <div className="friend-cat-card" style={{ background: '#fdfcf7', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <div className="friend-cat-icon">🎓</div>
                  <div className="friend-cat-label" style={{ color: '#1a202c' }}>College Days</div>
                </div>
                <div className="friend-cat-card" style={{ background: '#fdfcf7', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <div className="friend-cat-icon">💼</div>
                  <div className="friend-cat-label" style={{ color: '#1a202c' }}>Business Partners</div>
                </div>
                <div className="friend-cat-card" style={{ background: '#fdfcf7', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <div className="friend-cat-icon">✈️</div>
                  <div className="friend-cat-label" style={{ color: '#1a202c' }}>Travel Memories</div>
                </div>
                <div className="friend-cat-card" style={{ gridColumn: 'span 1.5', background: '#fdfcf7', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <div className="friend-cat-icon">🎉</div>
                  <div className="friend-cat-label" style={{ color: '#1a202c' }}>Celebrations</div>
                </div>
                <div className="friend-cat-card" style={{ gridColumn: 'span 1.5', background: '#fdfcf7', border: '1px solid rgba(212,175,55,0.2)' }}>
                  <div className="friend-cat-icon">🏆</div>
                  <div className="friend-cat-label" style={{ color: '#1a202c' }}>Success Together</div>
                </div>
              </div>
            </div>
            
            <div className="friend-right">
              <div className="img-frame" style={{ maxWidth: '440px', borderStyle: 'double', borderColor: 'var(--gold)', transform: 'rotate(2deg)', background: '#fff' }}>
                <img src="/assets/friendship_collage.png" alt="Friends Collage" style={{ width: '100%', display: 'block' }} />
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
