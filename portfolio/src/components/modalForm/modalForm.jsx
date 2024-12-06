import "./style.css";
import PropTypes from "prop-types";
import { ThemeContext } from "../themeContext/themeContext";
import { useContext } from "react";

export function ConfirmationModal({ message, onClose }) {
    
  const { theme } = useContext(ThemeContext);
  return (
    <div className="modal-overlay">
      <div className={`modal-box ${theme}`}>
        <p>{message}</p>
        <button onClick={onClose} className="modal-button">
          Fermer
        </button>
      </div>
    </div>
  );
}

ConfirmationModal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
