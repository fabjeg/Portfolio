import html from '../../assets/images/icons/HTML5.png';
import css from "../../assets/images/icons/css.png";
import sass from "../../assets/images/icons/sass.png";
import javascript from '../../assets/images/icons/javascript.webp';
import nodeJs from "../../assets/images/icons/node-js.png";
import react from "../../assets/images/icons/react-JS.png";
import redux from "../../assets/images/icons/Redux.png";
import reduxToolkit from "../../assets/images/icons/Redux-Toolkit.png";
import github from "../../assets/images/icons/github.png"
import mongodb from "../../assets/images/icons/mongodb.png"
import "./style.css";

export function Competence() {
    const skills = [
        { src: html, alt: "HTML", text: "HTML5" },
        { src: css, alt: "CSS", text: "CSS3" },
        { src: sass, alt: "SASS", text: "SASS" },
        { src: javascript, alt: "JavaScript", text: "JavaScript" },
        { src: nodeJs, alt: "Node.js", text: "Node.js" },
        { src: react, alt: "React", text: "React" },
        { src: redux, alt: "Redux", text: "Redux" },
        { src: reduxToolkit, alt: "Redux Toolkit", text: "Toolkit" },
        { src: github, alt: "github", text: "github" },
        { src: mongodb, alt: "mongodb", text: "mongoDB" }
        
    ];

    return (
        <div className='title-competence'>
            <h3 name="competence">Compétences</h3>
            <div className="container">
                <div className='container-icons'>
                    {skills.map((skill, index) => (
                        <div key={index} className='icon-wrapper'>
                            <img src={skill.src} alt={skill.alt} className="icon-image" />
                            <div className='icon-content'>{skill.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
