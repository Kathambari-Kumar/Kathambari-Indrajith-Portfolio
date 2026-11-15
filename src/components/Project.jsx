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
          <h3>Literary & Publishing Website</h3>
          <p className="project-role">
            Designer & Web Developer
          </p>

          <p>
            • Dedicated digital publishing platform showcasing original Tamil stories, novels, 
            and poetry collections with a clean, responsive reading experience.
          </p>

          <p>
            • Designed, deployed, and continuously maintained with custom UI styling, structured content 
            organization, and reader-focused navigation.
          </p>

          <div className="project-tech">
            WordPress • HTML5 • CSS3 • Custom UI • Responsive Design
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
          <h3>Developer Portfolio Website</h3>
          <p className="project-role">
            Frontend Developer
          </p>

          <p>
            • Responsive developer portfolio built with React and Vite to showcase full-stack, data, 
            and AI engineering projects alongside technical skills and experience.
          </p>

          <p>
            • Architected with modular, reusable UI components, clean typography, and mobile-first 
            styling for fast performance across devices.
          </p>

          <div className="project-tech">
            React • JavaScript • Vite • CSS3 • Responsive Design • Vercel
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
            Data & Backend Developer
          </p>

          <p>
            • Automated Python and Flask ETL application that extracts job application emails, 
            normalizes records into MySQL, and visualizes monthly and city-wise trends.
          </p>

          <p>
            • Built with automated data validation checks and Matplotlib dashboards to eliminate 
            manual tracking and ensure clean relational data.
          </p>

          <div className="project-tech">
            Python • Flask • MySQL • ETL • Matplotlib • SQL
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
          <h3>PolyAPI AI Multi-App</h3>

          <p className="project-role">
            Backend & AI Developer
          </p>

          <p>
            • Python and Flask microservice integrating Hugging Face vision-language models 
            (BLIP, PyTorch) for automated image captioning, emotion detection, and URL web scraping.
          </p>

          <p>
            • Built with RESTful endpoints supporting direct file uploads and automated image 
            preprocessing using Pillow and BeautifulSoup.
          </p>

          <div className="project-tech">
            Python • Flask • PyTorch • Hugging Face BLIP • Pillow • REST API
          </div>
        </div>

      
      </div>

    </section>
  );
}

export default Project;