import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Vinted" />
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
