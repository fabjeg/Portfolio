import "./style.css";
import { ThemeContext } from "../../index";
import { useContext } from "react";

export function InfoBox() {
  const { theme } = useContext(ThemeContext);

  const informations = [
    { label: "Nom", value: "Fabien Jégo" },
    { label: "Naissance", value: "29 octobre 1991" },
    { label: "Ville", value: "vannes" },
  ];

  const contactDetails = [
    { label: "E-mail", value: "fabien.jego.p@gmail.com" },
    { label: "Téléphone", value: "+33 6 95 35 29 16" },
    { label: "Skype", value: "Fabien_Jego" },
  ];

  return (
    <div className="container-informations">
      <div className={`info-box ${theme}`}>
        <table>
          <tbody>
            {informations.map((info, index) => (
              <tr key={index}>
                <td className="info-label">{info.label}</td>
                <td className="info-value">{info.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={`info-box ${theme}`}>
        <table>
          <tbody>
            {contactDetails.map((detail, index) => (
              <tr key={index}>
                <td className="info-label">{detail.label}</td>
                <td className="info-value">{detail.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
