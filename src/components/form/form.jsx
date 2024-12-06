import { useForm } from "react-hook-form";
import "./style.css";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../index";
import { useContext, useState } from "react";
import { ConfirmationModal } from "../../index";

export function Form() {
  const { theme } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onTouched" }); // Activation de la validation dès que le champ est touché
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (data) => {
    console.log("Data submitted:", data); // Debug pour vérifier les valeurs
    emailjs
      .send(
        "service_zlwfo2c",
        "template_jqfm4xp",
        {
          to_name: data.to_name,
          from_email: data.from_email,
          entreprise: data.entreprise,
          sujet: data.sujet,
          message: data.message,
        },
        "8Xw1Qhsh1n-FKPfu5"
      )
      .then((result) => {
        console.log("Email sent:", result.text);
        setMessage("Votre message a bien été envoyé !");
        setIsModalOpen(true);
        reset(); // Réinitialise les champs après l'envoi
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setMessage("Une erreur est survenue lors de l'envoi de votre message.");
        setIsModalOpen(true);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`form ${theme}`}>
      <form onSubmit={handleSubmit(sendEmail)}>
        {/* Message global d'erreur */}
        {Object.keys(errors).length > 0 && (
          <p className="global-error">
            Veuillez corriger les erreurs ci-dessous avant de soumettre le
            formulaire.
          </p>
        )}

        <div className="form-group">
          <div className="form-control">
            <label htmlFor="to_name">Nom</label>
            <input
              id="to_name"
              className={`input-form ${
                errors.to_name ? "input-error" : ""
              } ${theme}`}
              {...register("to_name", { required: "Le nom est requis." })}
              placeholder="Entrez votre nom"
              name="from_name"
            />
            {errors.to_name && (
              <p className="error-message">{errors.to_name.message}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="from_email">Email</label>
            <input
              id="from_email"
              className={`input-form ${
                errors.from_email ? "input-error" : ""
              } ${theme}`}
              {...register("from_email", {
                required: "L'email est requis.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Adresse email invalide.",
                },
              })}
              placeholder="Entrez votre email"
            />
            {errors.from_email && (
              <p className="error-message">{errors.from_email.message}</p>
            )}
          </div>
        </div>

        <div className="form-group">
          <div className="form-control">
            <label htmlFor="entreprise">Entreprise</label>
            <input
              id="entreprise"
              className={`input-form ${
                errors.entreprise ? "input-error" : ""
              } ${theme}`}
              {...register("entreprise", {
                required: "Le nom de l'entreprise est requis.",
              })}
              placeholder="Entrez le nom de l'entreprise"
            />
            {errors.entreprise && (
              <p className="error-message">{errors.entreprise.message}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="sujet">Sujet</label>
            <input
              id="sujet"
              className={`input-form ${
                errors.sujet ? "input-error" : ""
              } ${theme}`}
              {...register("sujet", { required: "Le sujet est requis." })}
              placeholder="Entrez le sujet"
            />
            {errors.sujet && (
              <p className="error-message">{errors.sujet.message}</p>
            )}
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className={`textarea-form ${
              errors.message ? "input-error" : ""
            } ${theme}`}
            {...register("message", { required: "Le message est requis." })}
            placeholder="Entrez votre message"
          />
          {errors.message && (
            <p className="error-message">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={!isValid} // Désactivation du bouton si le formulaire n'est pas valide
        >
          Envoyer
        </button>
      </form>
      {isModalOpen && (
        <ConfirmationModal message={message} onClose={closeModal} />
      )}
    </div>
  );
}
