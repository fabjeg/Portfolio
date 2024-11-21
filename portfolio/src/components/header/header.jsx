import { Link } from "react-scroll";
import "./style.css";

export function Header() {
    return (
        <div className="header">
            <div className="container_header">
                <nav className="nav">
                    <ul className="nav_ul">
                        <li className="nav_li">
                            <Link to="story" smooth={true} duration={500}>
                                À propos
                            </Link>
                        </li>
                        <li className="nav_li">
                            <Link to="competences" smooth={true} duration={500}>
                                compétences
                            </Link>
                        </li>
                        <li className="nav_li">
                            <Link to="projet" smooth={true} duration={500}>
                                projet
                            </Link>
                        </li>
                        <li className="nav_li">
                            <Link to="contact" smooth={true} duration={500}>
                                contact
                            </Link>
                        </li>
                    </ul>
                    <button className="button_cv">C.V</button>
                </nav>
            </div>
        </div>
    );
}
