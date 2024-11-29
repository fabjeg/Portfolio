import { useState } from "react";
import { Link } from "react-router-dom";
import portfolio from "../../assets/data/data";
import picturesSlide from "../../assets/data/dataSlide";
import { Slide } from "../slide/slide";
import "./style.css";

export function ProjectMap() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCarousel = (index) => {
    // Vérification pour éviter les erreurs d'index
    if (index < picturesSlide.length && picturesSlide[index].img.length > 0) {
      setCurrentImages(picturesSlide[index].img);
      setCurrentImageIndex(0);
      setShowCarousel(true);
    } else {
      console.error(`Images not found for index ${index}`);
    }
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <div>
      {showCarousel && (
        <Slide
          images={currentImages}
          currentIndex={currentImageIndex}
          onClose={closeCarousel}
          setCurrentIndex={setCurrentImageIndex} // Passer la fonction de mise à jour de l'index
        />
      )}
      {portfolio.map((proj, index) => (
        <div key={index} className="project-title">
          <img
            src={proj.image[0]} // Assurez-vous que `proj.image` est un tableau avec au moins une image
            alt={proj.name}
            className="project-pictures"
            onClick={() => openCarousel(index)}
          />
          <div className="project-content">
            <div>
              <h3>{proj.name}</h3>
              <div className="border-title-project"></div>
            </div>
            <font>{proj.text}</font>
            <div className="project-competences">
              {(Array.isArray(proj.competences) ? proj.competences : []).map(
                (lang, langIndex) => (
                  <span key={langIndex} className="font-competence">
                    {lang}
                  </span>
                )
              )}
            </div>
            <div className="link">
              <Link
                to={proj.site}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <i className="fas fa-globe"></i>
              </Link>
              <Link
                to={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
