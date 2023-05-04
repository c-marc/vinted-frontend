import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = ({ offers }) => {
  return (
    <div className="home">
      <Hero />
      <Products offers={offers} />
    </div>
  );
};

export default Home;
