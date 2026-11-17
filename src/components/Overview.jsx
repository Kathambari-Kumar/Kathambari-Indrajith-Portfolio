import profilePhoto from "../assets/Profile2.png";
import Download_CV from "../assets/Kathambari_Indrajith_CV.pdf";
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
Fullstack & AI Developer
</h2>
<p className="overview-description">
Fullstack & AI Developer with a Master of Computer Applications (UHR SeQF Level 7) 
and hands-on experience building scalable web applications, RESTful APIs, 
and AI-powered solutions using C#, ASP.NET Core, Python, React, TypeScript, Node.js, and SQL.
</p>
<p className="overview-description">
My background in Computer Science education and award-winning publishing has strengthened 
my communication, analytical thinking, and problem-solving skills. I enjoy learning new technologies, 
leveraging AI tools to streamline development, and turning ideas into reliable, user-focused software.
</p>
<div className="overview-badges">
<span className="badge">🏠︎ Sweden (Work Authorized)</span>
<span className="badge">🖳 .NET, TypeScript & AI</span>
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