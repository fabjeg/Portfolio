import "./style.css";
import { Header, InteractiveBackground, Form, Map } from "../../index";


export function Contact() {
  return (
    <div className="contactPage">
      <InteractiveBackground />
      <section className="contact-section">
        <h3>Contact</h3>
        <div className="border-title-contact"></div>
        <h4>Map</h4>
        <Map/>
        <h5>Formulaire</h5>
        <div className="border-title-contact"></div>
        <Form />
      </section>
      <Header />
    </div>
  );
}
