import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "johndoe@lereacteur.io",
    username: "JohnDoe",
    password: "azerty",
    newsletter: true,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        formData
      );
      console.log(result.data);
      const token = result.data.token;
      login(token);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="signup">
      <h2>S inscrire</h2>
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

        <button type="submit" className="btn-fill">
          S'inscire
        </button>
      </form>

      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
};

export default SignUp;
