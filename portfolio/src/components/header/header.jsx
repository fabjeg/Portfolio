import "./style.css";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="section-header">
        <div className="container-button">
          <div className="button-cv">
            <div className="button">
              <a href="../../../../C_V_Fabien_JEGO.jpg" download="C_V_Fabien_JEGO.jpg">
                <i className="fa-solid fa-download"></i>
              </a>
            </div>
            <div className="cv">
              <p>Mon CV</p>
              <div className="border-title-header"></div>
            </div>
          </div>
        </div>
        <div className="container-header-button">
          <button onClick={() => navigate("/")} className="button-header logo">
            <i className="fa-solid fa-house"></i> Home
          </button>
          <button onClick={() => navigate("/about")} className="button-header logo">
            <i className="fa-solid fa-user"></i> À propos
          </button>
          <button onClick={() => navigate("/project")} className="button-header logo">
            <i className="fa-solid fa-diagram-project"></i> Projet
          </button>
          <button onClick={() => navigate("/contact")} className="button-header logo">
            <i className="fa-solid fa-address-card"></i> Contact
          </button>
        </div>
      </div>
    </div>
  );
}
