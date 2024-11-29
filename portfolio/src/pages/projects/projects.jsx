import { Header, InteractiveBackground, ProjectMap } from "../../index/index";
import "./style.css";

export function Projects() {
  return (
    <div className="projectPage">
      <InteractiveBackground />
      <section className="project-section">
        <div className="title-project-page">
          <h2>Projets</h2>
          <ProjectMap/>
        </div>
      </section>
      <Header />
    </div>
  );
}
