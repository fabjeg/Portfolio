import "./style.css";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="section-header">
        <div className="container-header-button">
          <button onClick={() => navigate("/")} className="button-header fa-solid fa-house logo">Home</button>
          <button
            onClick={() => navigate("/about")}
            className="button-header fa-solid fa-user logo"
          >
            À propos
          </button>
          <button className="button-header fa-solid fa-diagram-project logo">
            Projet
          </button>
          <button className="button-header fa-solid fa-address-card logo">
            Contact
          </button>
        </div>
      </section>
    </div>
  );
}
