import { Header, InteractiveBackground} from "../../index/index";
import "./style.css";

export function HomePage() {
  return (
    <div className="homePage">
      <InteractiveBackground />
      <section className="homePage-section">
        <div className="title-home">
          <h1 className="fade-in">Fabien Jego</h1>
          <p className="slide-in">développeur front end</p>
        </div>
        <div className="container-home">
        </div>
      </section>
      <Header />
    </div>
  );
}
