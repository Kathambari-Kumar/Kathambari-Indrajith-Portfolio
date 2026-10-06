import storyImage from "../assets/Story_Site_Pic.png"
import PolyAPI_Image from "../assets/Poly_Image_Pic.jpg"
import ApplyInsigtsImage from "../assets/Apply_Insights_Pic.jpg"
import PortfolioImage from "../assets/Portfolio_Image.png"
function Project() {
  return (
    <section id="project" className="project-section">
      <div className="project-title-bar">
        <h2>Self Projects</h2>
      </div>

    <div className="project-item">

      <div className="project-thumbnail project-story">
          <img className="project-image"
          src={storyImage}
          alt="Story"></img>
      </div>

      <div className="project-details">
        <h3>Personal Storytelling Website</h3>
        <p className="project-role">
        Designer & Developer <span className="project-caption">[Live Website]</span>
        </p>
        
        <p>
        Personal publishing platform for original Tamil stories and novels with a clean, 
        accessible reading experience.
        </p>
        
        <p>
        Designed, maintained, and continuously improved to provide a better experience for readers.
        </p>
      
        <div className="project-tech">
        HTML • CSS • WordPress • Custom UI
        </div>
        
      </div>
      
      </div>
      
      <div className="project-item">
        <div className="project-thumbnail project-portfolio">
          
          <img className="project-image"
          src={PortfolioImage}
          alt="Story"></img>
       
        </div>
        
        <div className="project-details">
          <h3>Portfolio Website</h3>
          <p className="project-role">
          Designer & Developer
          </p>
          
          <p>
          Personal portfolio website showcasing skills, projects, and professional journey.
          </p>
          
          <p>
          Designed and continuously refined to present technical work and experience in a clear, professional format.
          </p>
        
        <div className="project-tech">
        React • Vite • CSS • Responsive Design
        </div>
      </div>
      
      </div>
      
      <div className="project-item">
      
        <div className="project-thumbnail project-apply">    
          <img className="project-image"
          src={ApplyInsigtsImage}
          alt="Story"></img>
        </div>
        
        <div className="project-details">

          <h3>ApplyInsights</h3>

          <p className="project-role">
          Data / Backend Developer
          </p>
          
          <p>
          Application for analysing and visualising job-related email 
          data through dashboards and reports.
          </p>
          
          <p>
          Built to automate data workflows, improve data consistency, 
          and support data-driven decision-making.
          </p>
          
          <div className="project-tech">
          Python • Flask • MySQL • ETL • Matplotlib
          </div>
        </div>       
      </div>
      
      <div className="project-item">
      
        <div className="project-thumbnail project-polyapi"> 
          <img className="project-image"
          src={PolyAPI_Image}
          alt="Story"></img>
        </div>
      
        <div className="project-details">
          <h3>PolyAPI</h3>

          <p className="project-role">
          Backend / AI Developer
          </p>
          
          <p>
          AI-powered application for image captioning, text processing, and web content analysis.
          </p>
          
          <p>
          Built to explore AI-enabled backend features and integrate machine 
          learning models into practical workflows..
          </p>
        
        <div className="project-tech">
        Python • Flask • BLIP • BeautifulSoup
        </div>
      </div>
      
      </div>

    </section>
  );
}

export default Project;