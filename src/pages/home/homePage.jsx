import { Header, InteractiveBackground} from "../../index/index";
import "./style.css";
import { ThemeContext } from "../../index";
import { useContext } from "react";

export function HomePage() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="homePage">
      <InteractiveBackground />
      <section className={`homePage-section ${theme}`}>
        <div className="title-home">
          <h1 className="fade-in">Fabien Jego</h1>
          <p className="slide-in">développeur front end</p>
        </div>
      </section>
      <Header />
    </div>
  );
}
