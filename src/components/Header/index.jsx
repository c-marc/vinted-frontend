import "./header.css";

import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";

import logo from "../../assets/img/logo.png";

const Header = ({ token, handleToken, search, setSearch }) => {
  const navigate = useNavigate();

  return (
    <header className="container">
      <Link to="/">
        <img src={logo} alt="Vinted logo" />
      </Link>

      <SearchBar search={search} setSearch={setSearch} />

      <nav>
        {!token ? (
          <div className="nav-group">
            <Link to="/signup">
              <button className="btn">S'inscrire </button>
            </Link>
            <Link to="/login">
              <button className="btn">Se connecter</button>
            </Link>
          </div>
        ) : (
          <button
            className="btn btn-secondary"
            onClick={() => {
              handleToken(null);
              navigate("/");
            }}
          >
            Se déconnecter
          </button>
        )}

        <Link to="/offer/publish">
          <button className="btn btn-primary">Vends tes articles</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
