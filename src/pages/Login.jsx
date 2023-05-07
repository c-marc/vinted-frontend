import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ handleToken }) => {
  const [formData, setFormData] = useState({
    email: "johndoe@lereacteur.io",
    password: "azerty",
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
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
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
      // attention le back renvoie 400 si user not found
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("email ou mot-de-passe incorrect");
      } else {
        setErrorMessage("L'authentification a échoué. Contactez-nous.");
      }
    }
  };

  return (
    <div className="auth-form-container">
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className="btn btn-primary">
          Se connecter
        </button>
      </form>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <Link to="/signup">
        <p>Pas encore inscrit ? Inscris-toi !</p>
      </Link>
    </div>
  );
};

export default Login;
