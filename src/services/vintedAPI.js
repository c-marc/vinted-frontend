import axios from "axios";

const URL = "https://lereacteur-vinted-api.herokuapp.com/offers";

const fetchOffers = async () => {
  try {
    const result = await axios.get(URL);
    return result.data;
  } catch (error) {
    throw new Error("Failed to fetch Vinted API");
  }
};

export default fetchOffers;
