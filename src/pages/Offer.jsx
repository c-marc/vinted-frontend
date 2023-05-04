import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ProductCardBig from "../components/ProductCardBig";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "https://lereacteur-vinted-api.herokuapp.com/offer/" + id;
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
  }, [id]);

  console.log(data);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="offer">
          <img src={data.product_image.secure_url} alt="TODO"></img>
          <ProductCardBig offerData={data} />
        </div>
      )}
    </>
  );
};

export default Offer;
