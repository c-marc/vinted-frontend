import { useState, useEffect } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import { getPageMax, urlWithFilters } from "../utils/utils";
import Filters from "../components/Filters";

const Home = ({ search, setSearch }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [filters, setFilters] = useState({
    priceMin: null,
    priceMax: null,
    sort: "price-asc", //null,
    page: null,
    limit: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "https://lereacteur-vinted-api.herokuapp.com/offers";
        const URLwithQuery = urlWithFilters(URL, { ...filters, title: search });
        // console.log(URLwithQuery);
        const result = await axios.get(URLwithQuery);
        if (!ignore) {
          setData(result.data);
          setIsLoading(false);

          // Refetch can make the page invalid
          // This will trigger a new fetch
          if (filters.page) {
            const pageMax = getPageMax(filters.limit, result.data.count);
            console.log(pageMax);
            if (filters.page > pageMax) {
              setFilters({ ...filters, page: pageMax });
            }
          }
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
  }, [filters, search]);

  // console.log(data);
  return (
    <main>
      <Hero />
      <div className="container">
        <Filters
          filters={filters}
          setFilters={setFilters}
          count={data.count || 0}
          setSearch={setSearch}
        ></Filters>
        {isLoading ? <p>Loading...</p> : <ProductList data={data.offers} />}
      </div>
    </main>
  );
};

export default Home;
