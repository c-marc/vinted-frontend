import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/img/logo.png";
import SearchBar from "./SearchBar";

const Header = ({ token, handleToken, search, setSearch }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Vinted" />
        </Link>

        <SearchBar search={search} setSearch={setSearch} />

        <nav>
          {!token ? (
            <>
              <Link to="/signup">
                <button>S'inscrire </button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>
            </>
          ) : (
            <button
              className="btn-fill secondary"
              onClick={() => {
                handleToken(null);
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
          )}

          <Link to="/offer/publish">
            <button className="btn-fill">Vends tes articles</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
