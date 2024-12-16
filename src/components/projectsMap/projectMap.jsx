import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import portfolio from "../../assets/data/data";
import picturesSlide from "../../assets/data/dataSlide";
import { Slide } from "../slide/slide";
import "./style.css";
import { ThemeContext } from "../../index";

export function ProjectMap() {
  const { theme } = useContext(ThemeContext);
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselData, setCarouselData] = useState({ images: [], index: 0 });

  const openCarousel = (index) => {
    const images = picturesSlide[index]?.img || [];
    if (images.length > 0) {
      setCarouselData({ images, index: 0 });
      setShowCarousel(true);
    } else {
      console.error(`Images not found for index ${index}`);
    }
  };

  const closeCarousel = () => setShowCarousel(false);

  return (
    <div>
      {showCarousel && (
        <Slide
          images={carouselData.images}
          currentIndex={carouselData.index}
          onClose={closeCarousel}
          setCurrentIndex={(index) =>
            setCarouselData((prev) => ({ ...prev, index }))
          }
        />
      )}

      {portfolio.map((proj, index) => (
        <div key={index} className={`project-title ${theme}`}>
          <img
            src={proj.image[0]}
            alt={proj.name}
            className={`project-pictures ${theme}`}
            onClick={() => openCarousel(index)}
          />
          <div className="project-content">
            <h3>{proj.name}</h3>
            <div className={`border-title-project ${theme}`}></div>
            <p>{proj.text}</p>
            <div className="project-competences">
              {proj.competences?.map((lang, langIndex) => (
                <span key={langIndex} className={`font-competence ${theme}`}>
                  {lang}
                </span>
              ))}
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
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
