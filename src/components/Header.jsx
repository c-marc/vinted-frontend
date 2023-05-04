import { Link } from "react-router-dom";

import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Vinted" />
        </Link>
        <input type="search" placeholder="Recherche des articles" />
        <nav>
          <button>S inscrire </button>
          <button>Se connecter</button>
          <button className="btn-fill">Vends tes articles</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
