import project from "../../assets/data/data";
import { Header, InteractiveBackground } from "../../index/index";
import { Link } from "react-router-dom";
import "./style.css";

export function Projects() {
  return (
    <div className="projectPage">
      <InteractiveBackground />
      <section className="project-section">
        <div className="title-project-page">
          <h2>Projets</h2>
        <div className="border-title"></div>
        </div>
        {project.map((proj, index) => (
          <div key={index} className="project-title">
            <img
              src={proj.image}
              alt={proj.name}
              className="project-pictures"
            />
            <div className="project-content">
              <div>
              <h3>{proj.name}</h3>
              <div className="border-title-project"></div>
              </div>
              <font>{proj.text}</font>
              <div className="project-competences">
                {(Array.isArray(proj.competences) ? proj.competences : []).map(
                  (lang, langIndex) => (
                    <span key={langIndex} className="font-competence">
                      {lang}
                    </span>
                  )
                )}
              </div>
              <div className="link">
                <Link
                  to={proj.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <i className="fas fa-globe"></i>
                </Link>
                <Link
                  to={proj.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <i className="fab fa-github"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Header />
    </div>
  );
}
