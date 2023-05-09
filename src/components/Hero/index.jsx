import "./hero.css";

import { Link } from "react-router-dom";

import tear from "../../assets/img/tear.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={tear} alt="just a clipping path" />
      <div className="container">
        <div className="hero-card">
          <h1>
            Prêts à faire du tri
            <br />
            dans vos placards ?
          </h1>
          <Link to="/offer/publish">
            <button className="btn btn-primary">Commencez à vendre</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
