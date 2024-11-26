import "./style.css";
import { useNavigate } from "react-router-dom";
import { saveAs } from 'file-saver';

export function Header() {
  const navigate = useNavigate();

  const handleDownload = () => {
    saveAs('/cv/C_V_Fabien_JEGO.pdf', 'C_V_Fabien_JEGO.pdf');
  };

  return (
    <div>
      <div className="section-header">
        <div className="container-button">
          <div className="button-cv">
            <button className="fa-solid fa-check button" onClick={handleDownload}></button>
            <p>Mon CV</p>
          </div>
        </div>
        <div className="container-header-button">
          <button
            onClick={() => navigate("/")}
            className="button-header fa-solid fa-house logo"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/about")}
            className="button-header fa-solid fa-user logo"
          >
            À propos
          </button>
          <button 
          onClick={() => navigate("/project")}
          className="button-header fa-solid fa-diagram-project logo">
            Projet
          </button>
          <button className="button-header fa-solid fa-address-card logo">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
