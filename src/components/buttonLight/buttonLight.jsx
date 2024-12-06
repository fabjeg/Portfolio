import { useContext } from "react";
import { ThemeContext } from "../themeContext/themeContext";
import "./style.css";

export function ButtonLight() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`footerContainer ${theme}`}>
      <div className={`modeButton ${theme}`} onClick={toggleTheme}>
        {theme === "light" ? (
          <i className="fa fa-sun-o"></i> 
        ) : (
          <i className="fa fa-moon-o"></i>
        )}
      </div>
    </div>
  );
}
