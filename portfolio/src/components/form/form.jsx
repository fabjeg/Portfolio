import { useForm } from "react-hook-form";
import './style.css';
import emailjs from 'emailjs-com';


export function Form() {

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("===>", e.target);
    
    emailjs.sendForm('service_zlwfo2c', 'template_jqfm4xp', e.target, '8Xw1Qhsh1n-FKPfu5')
        .then((result) => {
            console.log('Email sent:', result.text);
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
};

  return (
    <div className="form">
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <div className="form-control">
            <input
              className={`input-form ${errors.Name ? "input-error" : ""}`}
              {...register("Name", { required: "Le nom est requis." })}
              placeholder="nom"
              name="to_name"
            />
            {errors.Name && <p className="error-message">{errors.Name.message}</p>}
          </div>
          <div className="form-control">
            <input
              className={`input-form ${errors.Email ? "input-error" : ""}`}
              {...register("Email", {
                required: "L'email est requis.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Adresse email invalide.",
                },
              })}
              placeholder="Email"
            />
            {errors.Email && <p className="error-message">{errors.Email.message}</p>}
          </div>
        </div>
        <div className="form-group">
          <div className="form-control">
            <input
              className={`input-form ${errors.Entreprise ? "input-error" : ""}`}
              {...register("Entreprise", { required: "Le nom de l'entreprise est requis." })}
              placeholder="Entreprise"
            />
            {errors.Entreprise && (
              <p className="error-message">{errors.Entreprise.message}</p>
            )}
          </div>
          <div className="form-control">
            <input
              className={`input-form ${errors.Sujet ? "input-error" : ""}`}
              {...register("Sujet", { required: "Le sujet est requis." })}
              placeholder="Sujet"
            />
            {errors.Sujet && <p className="error-message">{errors.Sujet.message}</p>}
          </div>
        </div>
        <div className="form-control">
          <textarea
            className={`textarea-form ${errors.Message ? "input-error" : ""}`}
            {...register("Message", { required: "Le message est requis." })}
            placeholder="Votre message"
            name="message"
          />
          {errors.Message && <p className="error-message">{errors.Message.message}</p>}
        </div>
        <button type="submit" value="Envoyer" className="submit-button"/>
      </form>
    </div>
  );
}
