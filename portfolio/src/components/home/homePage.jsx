import { Header, InteractiveBackground } from '../index';
import './style.css';
import video from "../../assets/video/Développer front-end.mp4"

export function HomePage() {


  return (
    <div className="homePage">
      <InteractiveBackground/>
       <section className='homePage-section'>
        <div className="title">
          <h1>Fabien Jego</h1>
        <video 
        src={video} 
        autoPlay 
        loop 
        muted 
        className="video-background"
      >
      </video>
        </div>
        <div className='container-button'>
          <div className='button-cv'>
          <button className="fa-solid fa-check button"></button>
          <p>Télécharger mon CV</p>
          </div>
        </div>
       </section>
      <Header/>
    </div>
  );
}