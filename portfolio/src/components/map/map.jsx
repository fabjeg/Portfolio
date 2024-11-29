import vannes from "../../assets/images/picture-loc/map.png";
import "./style.css";

export function Map() {
    return (
        <div className="container-picture">
            <div className="picture-loc">
                <img src={vannes} alt="map" />
                <div className="point-red"></div>
            </div>
        </div>
    );
}
