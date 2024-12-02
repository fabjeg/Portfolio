import "./style.css";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";

export function Header() {
  const navigate = useNavigate();

  const handleDownload = () => {
    const icon = document.querySelector(".fa-download");
    if (icon) {
      icon.classList.add("rotate");
    }
    saveAs("/CV/C_V_Fabien_JEGO.pdf", "C_V_Fabien_JEGO.pdf");
    setTimeout(() => {
      if (icon) icon.classList.remove("rotate");
    }, 1500);
  };

  return (
    <div>
      <div className="section-header">
        <div className="container-button">
          <div className="button-cv">
            <div className="button" onClick={handleDownload}>
              <i className="fa-solid fa-download" ></i>
            </div>
            <div className="cv">
              <p>Mon CV</p>
              <div className="border-title-header"></div>
            </div>
          </div>
        </div>
        <div className="container-header-button">
          <button
            onClick={() => navigate("/")}
            className="button-header  logo"
          >
            <i className="fa-solid fa-house"></i>
            Home
            
          </button>
          <button
            onClick={() => navigate("/about")}
            className="button-header  logo"
          >
            <i className="fa-solid fa-user"></i>
            À propos
          </button>
          <button
            onClick={() => navigate("/project")}
            className="button-header  logo"
          >
            <i className="fa-solid fa-diagram-project"></i>
            Projet
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="button-header logo"
          >
            <i className="fa-solid fa-address-card"></i>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
