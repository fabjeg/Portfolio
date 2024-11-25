import "./style.css";
import {
  Competence,
  Header,
  InfoBox,
  InteractiveBackground,
  Story,
} from "../index";

export function About() {
  return (
    <div className="aboutPage">
      <InteractiveBackground />
      <section className="aboutPage-section">
        <div className="titleAbout">
          <h1>À propos</h1>
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