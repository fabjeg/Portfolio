import "./style.css";
import {
  Competence,
  Header,
  InfoBox,
  InteractiveBackground,
  Story,
} from "../../index/index";
import { ThemeContext } from "../../index";
import { useContext } from "react";

export function About() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="aboutPage">
      <InteractiveBackground />
      <section className={`aboutPage-section ${theme}`}>
        <div className={`titleAbout ${theme}`}>
          <h1>À propos</h1>
          <div className={`border-title ${theme}`}></div>
        </div>
        <div className="conatinerStory">
          <Story />
        </div>
        <div><InfoBox/></div>
        <div><Competence/></div>
      </section>
      <Header />
    </div>
  );
}
