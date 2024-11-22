
import { useSelector } from 'react-redux';
import { Header, InteractiveBackground, About, Projects, Contact } from '../index';
import './style.css';
import video from "../../assets/video/Développer front-end.mp4";


const sectionComponents = {
  about: About,
  projects: Projects,
  contact: Contact,
};

export function HomePage() {
  const activeSection = useSelector((state) => state.section.activeSection);
  const ActiveComponent = sectionComponents[activeSection] || (() => (
    <>
      <div className="title">
        <h1>Fabien Jego</h1>
        <video
          src={video}
          autoPlay
          loop
          muted
          className="video-background"
        ></video>
      </div>
      <div className="container-button">
        <div className="button-cv">
          <button className="fa-solid fa-check button"></button>
          <p>Télécharger mon CV</p>
        </div>
      </div>
    </>
  ));

  return (
    <div className="homePage">
      <InteractiveBackground />
      <section className="homePage-section">
        <ActiveComponent />
      </section>
      <Header />
    </div>
  );
}
