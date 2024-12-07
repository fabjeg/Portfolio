import "./style.css";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import { ThemeContext } from "../themeContext/themeContext";
import { useContext } from "react";
import { ButtonLight } from "../buttonLight/buttonLight";

export function Header() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleDownload = () => {
    const icon = document.querySelector(".fa-download");
    if (icon) {
      icon.classList.add("rotate");
    }
    saveAs("https://portfolio-j4ugwif4m-fabiens-projects-3e207d58.vercel.app/CV.pdf", "CV.pdf");
    setTimeout(() => {
      if (icon) icon.classList.remove("rotate");
    }, 1500);
  };

  return (
    <div>
      <div className={`section-header ${theme}`}>
        <div className="container-button">
          <div className="button-cv">
            <div className={`button ${theme}`} onClick={handleDownload}>
              <i className={`fa-solid fa-download ${theme}`} ></i>
            </div>
            <div className={`cv ${theme}`}>
              <p>Mon CV</p>
              <div className={`border-title-header ${theme}`}></div>
            </div>
          </div>
        </div>
        <ButtonLight />
        <div className="container-header-button">
          <button
            onClick={() => navigate("/")}
            className={`button-header logo ${theme}`}
          >
            <i className={`fa-solid fa-house`}></i> Home
          </button>
          <button
            onClick={() => navigate("/about")}
            className={`button-header logo ${theme}`}
          >
            <i className={`fa-solid fa-user`}></i> À propos
          </button>
          <button
            onClick={() => navigate("/project")}
            className={`button-header logo ${theme}`}
          >
            <i className={`fa-solid fa-diagram-project`}></i> Projet
          </button>
          <button
            onClick={() => navigate("/contact")}
            className={`button-header logo ${theme}`}
          >
            <i className={`fa-solid fa-address-card`}></i> Contact
          </button>
        </div>
      </div>
    </div>
  );
}