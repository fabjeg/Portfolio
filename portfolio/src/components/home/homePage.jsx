import { Header, InteractiveBackground } from "../index";
import "./style.css";

export function HomePage() {
  return (
    <div className="homePage">
      <InteractiveBackground />
      <section className="homePage-section">
        <div className="title-home">
          <h1 className="fade-in">Fabien Jego</h1>
          <p className="slide-in">Front-End Developer</p>
        </div>
        <div className="video">
       
        </div>
      </section>
      <Header />
    </div>
  );
}
