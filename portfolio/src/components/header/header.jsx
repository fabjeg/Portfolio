import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "../../slices/slicesAbout";
import "./style.css";

export function Header() {
  const dispatch = useDispatch();
  const activeButton = useSelector((state) => state.section.activeSection);

  const handleButtonClick = (section) => {
    dispatch(setActiveSection(section));
  };

  return (
    <div>
      <section className="section-header">
        <div className="container-header-button">
          <button
            className={`button-header fa-solid fa-house logo ${activeButton === 'home' ? "active" : ""}`}
            onClick={() => handleButtonClick('home')}
          >
            Home
          </button>
          <button
            className={`button-header fa-solid fa-user logo ${activeButton === 'about' ? "active" : ""}`}
            onClick={() => handleButtonClick('about')}
          >
            À propos
          </button>
          <button
            className={`button-header fa-solid fa-diagram-project logo ${activeButton === 'projects' ? "active" : ""}`}
            onClick={() => handleButtonClick('projects')}
          >
            Projet
          </button>
          <button
            className={`button-header fa-solid fa-address-card logo ${activeButton === 'contact' ? "active" : ""}`}
            onClick={() => handleButtonClick('contact')}
          >
            Contact
          </button>
        </div>
      </section>
    </div>
  );
}
