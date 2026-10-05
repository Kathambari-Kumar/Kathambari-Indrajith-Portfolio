import profilePhoto from "../assets/Profile2.png";
function Contact() {
  return (
    <section id="contact" className="contact-section">
      
      <div className="contact-card">

        <div className="contact-photo-wrapper">
          <img
                  src={profilePhoto}
                  alt="Kathambari Indrajith"
                  className="profile-photo"
                />
        </div>

        <div className="contact-content">

          <h2>Let's Connect</h2>

          <p className="contact-message">
          Thank you for visiting my portfolio. I would be delighted 
          to connect regarding frontend development 
          opportunities, collaboration, or technology-related discussions..
          </p>
        
          <div className="contact-list">
        
            <div className="contact-item">
            <span className="contact-icon">✉</span>
            <span className="contact-text-color"> kathambari.indrajith@gmail.com</span>
            </div>
        
            <div className="contact-item">
            <span className="contact-icon">ℹ️</span>
            <a
            href="https://www.linkedin.com/in/kathambari-indrajith/"
            target="_blank"
            rel="noreferrer"
            >
            LinkedIn
            </a>
            </div>
        
            <div className="contact-item">
            <span className="contact-icon">𖦥</span>
            <a
            href="https://github.com/Kathambari-Kumar/"
            target="_blank"
            rel="noopener noreferrer"
            >
            GitHub
            </a>
            </div>
        
            <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <a
            href="https://kathambariwritings.com/"
            target="_blank"
            rel="noreferrer"
            >
            Story Website
            </a>
            </div>
        
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span className="contact-text-color">Finspång, Sweden</span>
            </div>
        
        </div>     
      </div>
      <div className="corner-fold"></div>
      </div>
    </section>
  );
}

export default Contact;