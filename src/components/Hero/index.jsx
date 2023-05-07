import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="container">
        <div className="hero-card">
          <h1>
            Prêts à faire du tri
            <br />
            dans vos placards ?
          </h1>
          <Link to="/publish">
            <button className="btn btn-primary">Commencez à vendre</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
