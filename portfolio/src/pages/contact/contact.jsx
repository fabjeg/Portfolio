import "./style.css";
import { Header, InteractiveBackground, Form } from "../../index";
import vannes from "../../assets/images/picture-loc/map.png";

export function Contact() {
  return (
    <div className="contactPage">
      <InteractiveBackground />
      <section className="contact-section">
        <h3>Contact</h3>
        <div className="border-title-contact"></div>
        <h4>Map</h4>
        <div className="border-title-map"></div>
        <div className="container-picture">
          <div className="picture-loc">
            <img src={vannes} alt="" />
          </div>
        </div>
        <h5>Formulaire</h5>
        <div className="border-title-contact"></div>
        <Form />
      </section>
      <Header />
    </div>
  );
}
