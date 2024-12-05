import "./style.css";
import { Header, InteractiveBackground, Form, Map } from "../../index";
import { ThemeContext } from "../../index";
import { useContext } from "react";

export function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="contactPage">
      <InteractiveBackground />
      <section className={`contact-section ${theme}`}>
        <div className={`titleContact ${theme}`}>
          <h3>Contact</h3>
        </div>
        <div className={`border-title-contact ${theme}`}/>
        <div className={`titleContact ${theme}`}>
          <h4>Map</h4>
        </div>
        <div className={`border-title-map ${theme}`}/>
        <Map />
        <div className="conatinerStory">
          <div className={`titleContact ${theme}`}>
            <h5>Formulaire</h5>
          </div>
          <div className={`border-title-form ${theme}`}/>
        </div>
        <div>
          <Form />
        </div>
      </section>
      <Header />
    </div>
  );
}
