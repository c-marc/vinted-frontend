import { Link } from "react-router-dom";

import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Vinted" />
        </Link>
        <input type="search" placeholder="Rechercher des articles" />
        <nav>
          {!isAuthenticated ? (
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
                setIsAuthenticated(false);
                Cookies.remove("token");
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
          )}

          <button className="btn-fill">Vends tes articles</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
