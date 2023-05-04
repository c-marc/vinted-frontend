import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "johndoe@lereacteur.io",
    password: "azerty",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        formData
      );
      console.log(result.data);
      const token = result.data.token;
      Cookies.set("token", token, { expires: 2 });
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="login">
      <h2>Se connecter</h2>
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

        <button type="submit" className="btn-fill">
          Se connecter
        </button>
      </form>

      <Link to="/signup">Pas encore inscrit ? Inscris-toi !</Link>
    </div>
  );
};

export default Login;
