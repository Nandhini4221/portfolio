import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../styles/App.css";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ShopZone E-Commerce Platform",
      desc: "A modern and responsive e-commerce web application featuring product browsing, cart management, and clean UI.",
      image: project1,
      tags: ["React", "Node", "Express", "MongoDB"],
      github: "https://github.com/Nandhini4221",
      demo: "https://your-ecommerce-demo.netlify.app",
    },
    {
      id: 2,
      title: "Animated Portfolio Website",
      desc: "A visually stunning personal portfolio website with smooth animations and responsive design.",
      image: project2,
      tags: ["React", "CSS", "Animations"],
      github: "https://github.com/Nandhini4221",
      demo: "https://your-portfolio-demo.netlify.app",
    },
    {
      id: 3,
      title: "Glassmorphism Music Player",
      desc: "A stylish music player web app with modern UI and smooth controls.",
      image: project3,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Nandhini4221",
      demo: "https://offlinemusicprg.netlify.app",
    },
  ];

  const allProjects = "https://github.com/Nandhini4221?tab=repositories";

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <div className="projects-title">
          <h2>My <span>Projects</span></h2>
          <p>A showcase of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">

              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>

                <div className="btn-group">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn code">
                    <FaGithub /> Code
                  </a>

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn demo">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <a href={allProjects} target="_blank" rel="noreferrer" className="view-btn">
            <FaGithub /> View All Projects <FaExternalLinkAlt />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;