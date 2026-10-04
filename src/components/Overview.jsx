import profilePhoto from "../assets/Profile2.png";
import Download_CV from "../assets/Kathambari Indrajith - CV.pdf";
function Overview() {
return (

<section id="overview" className="overview-section">
<div className="overview-container">
<div className="overview-image-area">

    <div className="code-card">
      <pre>
      {`const developer = {
      name: "Kathambari",
      role: "Frontend Developer",
      location: "Sweden"
      }`}
      </pre>
    </div>
    <div className="photo-card">

      <img
        src={profilePhoto}
        alt="Kathambari Indrajith"
        className="profile-photo"
      />

    </div>
</div>

<div className="overview-content">
<p className="overview-label">
Hello, I'm
</p>
<h1 className="overview-name">
Kathambari Indrajith
</h1>
<h2 className="overview-role">
Frontend & Full-Stack Developer
</h2>
<p className="overview-description">
Frontend and Full-Stack Developer with hands-on experience
building web applications using React, JavaScript, HTML,
CSS, ASP.NET Core, and SQL.
</p>
<p className="overview-description">
My background in Computer Science education and publishing
has strengthened my communication, analytical thinking,
and problem-solving skills. I enjoy learning new
technologies, building practical solutions, and turning
ideas into working applications that create value for users.
</p>
<div className="overview-badges">
<span className="badge">🏠︎ Sweden</span>
<span className="badge">🖳 React Developer</span>
<span className="badge">🕮 Author & Educator</span>
</div>

<div className="overview-links">
<a
href="https://www.linkedin.com/in/kathambari-indrajith/"
target="_blank"
rel="noreferrer"
>
LinkedIn
</a>

<a 
href="https://github.com/Kathambari-Kumar/" 
target="_blank" 
rel="noreferrer"> 
GitHub
</a>

<a 
      href={Download_CV}
      download="Kathambari_Indrajith_CV.pdf"
      target="_blank" 
      rel="noreferrer"> 
      Download CV
    </a>
</div>

</div>
</div>
</section>
);
}
export default Overview;