import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] =useState(false);

  return (
    <div className="navbar-wrapper">
    <nav className="navbar">
      <div className="navbar-logo">
        <p className="logo-icon">KATHAMBARI INDRAJITH</p>
        <p className="logo-text">Frontend & Full-Stack Developer</p>
      </div>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className="navbar-links">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#toolkit">Toolkit</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#growth-path">Experience</a></li>
        <li><a href="#academic">Academic Journey</a></li>
        <li><a href="#recognition">Recognition</a></li>
        <li><a href="#contact">Connect</a></li>
      </ul>
    </nav>

      {menuOpen && (
          <div className="mobile-menu">

          <li><a href="#overview" onClick={() => setMenuOpen(!menuOpen)}>Overview</a></li>
        <li><a href="#toolkit" onClick={() => setMenuOpen(!menuOpen)}>Toolkit</a></li>
        <li><a href="#project" onClick={() => setMenuOpen(!menuOpen)}>Projects</a></li>
        <li><a href="#growth-path" onClick={() => setMenuOpen(!menuOpen)}>Experience</a></li>
        <li><a href="#academic" onClick={() => setMenuOpen(!menuOpen)}>Academic Journey</a></li>
        <li><a href="#recognition" onClick={() => setMenuOpen(!menuOpen)}>Recognition</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>Connect</a></li>
          </div>
      )}

  </div>
  );
}

export default Navbar;