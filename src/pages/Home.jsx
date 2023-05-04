import { useState, useEffect } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "https://lereacteur-vinted-api.herokuapp.com/offers";
        const result = await axios.get(URL);
        if (!ignore) {
          setData(result.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  // console.log(data);
  return (
    <div className="home">
      <Hero />
      {isLoading ? <p>Loading...</p> : <Products offersData={data.offers} />}
    </div>
  );
};

export default Home;
