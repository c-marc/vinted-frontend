import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ProductCardBig from "../components/ProductCardBig";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`;
        const result = await axios.get(URL);
        if (!ignore) {
          setData(result.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    // Good practice: return a callback
    // If useEffect is fetching, ignore the promise resolution
    let ignore = false;
    fetchData();
    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <main className="offer-container">
      <div className="container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <img src={data.product_image.secure_url} alt="TODO"></img>
            <ProductCardBig data={data} />
          </>
        )}
      </div>
    </main>
  );
};

export default Offer;
