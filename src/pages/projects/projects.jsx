import { Header, InteractiveBackground, ProjectMap} from "../../index/index";
import "./style.css";
import { ThemeContext } from "../../index";
import { useContext } from "react";

export function Projects() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="projectPage">
      <InteractiveBackground />
      <section className={`project-section ${theme}`}>
        <div className={`title-project-page ${theme}`}>
          <h2>Projets</h2>
          <div className={`border-title-project ${theme}`}></div>
          <ProjectMap/>
        </div>
      </section>
      <Header />
    </div>
  );
}
