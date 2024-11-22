import "./style.css";
import { Competence, Header, InfoBox, InteractiveBackground, Story } from "../index";

export function About() {
 

  return (
    <div className="container-ghost">
    <div className="about-page">
      <InteractiveBackground />
      <div className="container-about">
        <div className="font">
          <font>Sur moi</font>
        </div>
        <div className="title-about">
          <h2>Fabien Jégo</h2>
        </div>
        <div className="story">
          <Story />
        </div>
        <div>
         <InfoBox/>
        </div>
        <div>
            <Competence/>
        </div>
      </div>
      <div  className="header-about">
      <Header/>
      </div>
    </div>
    </div>
  );
}
