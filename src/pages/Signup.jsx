import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = ({ handleToken }) => {
  const [formData, setFormData] = useState({
    email: "johndoe@lereacteur.io",
    username: "JohnDoe",
    password: "azerty",
    newsletter: true,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const result = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        formData
      );
      // console.log(result.data);
      if (result.data.token) {
        const token = result.data.token;
        handleToken(token);
        navigate("/");
      } else {
        throw new Error("Missing token");
      }
    } catch (error) {
      console.error(error.message);
      if (error.response?.status === 409) {
        setErrorMessage("Cet email est déjà utilisé");
      } else if (error.response?.data.message === "Missing parameters") {
        setErrorMessage("Tous les champs sont requis");
      } else {
        setErrorMessage("L'inscription a échoué. Contactez-nous.");
      }
    }
  };

  return (
    <div className="signup">
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Nom d utilisateur"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mot de passe"
          required
        />

        <div>
          <input
            id="newsletter"
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={(e) =>
              setFormData({ ...formData, newsletter: !formData.newsletter })
            }
            required
          />
          <label htmlFor="newsletter">S inscrire à notre newletter</label>
        </div>

        <button type="submit" className="btn-fill">
          S'inscire
        </button>
      </form>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <Link to="/login">
        <p>Tu as déjà un compte ? Connecte-toi !</p>
      </Link>
    </div>
  );
};

export default SignUp;
