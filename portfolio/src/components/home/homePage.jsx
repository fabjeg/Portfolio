import { Header, InteractiveBackground } from "../index";
import "./style.css";
import video from "../../assets/video/Développer front-end.mp4";

export function HomePage() {
  return (
    <div className="homePage">
      <InteractiveBackground />
      <section className="homePage-section">
        <div className="title-home">
          <h1>Fabien Jego</h1>
        </div>
        <div className="video">
          <video
            src={video}
            autoPlay
            loop
            muted
            className="video-background"
          ></video>
        </div>
      </section>
      <Header />
    </div>
  );
}
