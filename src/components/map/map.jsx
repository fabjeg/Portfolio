import vannes from "../../assets/images/picture-loc/map.png";
import "./style.css";
import { ThemeContext } from "../../index";
import { useContext } from "react";


export function Map() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="container-picture">
            <div className={`picture-loc ${theme}`}>
                <img src={vannes} alt="map" />
                <div className="point-red"></div>
            </div>
        </div>
    );
}
