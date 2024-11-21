/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import "../story/style.css";
import { ScrollReveal } from "../index";

export function Story() {
  const storyRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(storyRef.current); 
      }
    }, { threshold: 0.1 });

    observer.observe(storyRef.current);

    return () => observer.disconnect(); 
  }, []);

  return (
    
    <div className="container" id="story">
    <div className={`container-story ${inView ? "in-view" : ""}`} ref={storyRef}>
      <ScrollReveal/>
      <h1 className="title-h1">À Propos</h1>
      <p className="content-p">
      Je m'appelle Fabien Jego et je suis un développeur web front-end
          passionné par la technologie et le développement. Diplômé d'une
          formation intensive de 9 mois chez OpenClassrooms en tant
          qu'intégrateur web, j'ai acquis des compétences solides et un niveau
          de connaissances équivalent à un Bac+2, me permettant de mener à bien
          des projets ambitieux et soignés.
      </p>
      <p className="content-p">
      Mon intérêt pour l'informatique, m'a
          naturellement conduit à transformer cette passion en carrière.
          Toujours curieux et motivé, je cherche sans cesse à élargir mes
          compétences, à découvrir de nouvelles technologies et à apporter ma
          contribution à des projets stimulants.
      </p>
      <p className="content-p">
      {" "}
          Je suis actuellement à la recherche de nouvelles opportunités
          professionnelles et je suis ouvert aux collaborations pour des projets
          créatifs et engageants. Si vous êtes à la recherche d'un développeur
          enthousiaste, rigoureux et prêt à relever des défis, je serais honoré
          de rejoindre votre équipe et de contribuer activement à vos projets.
          </p>
    </div>
    </div>
  );
}
