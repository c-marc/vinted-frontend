import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import fetchOffers from "./services/vintedAPI";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await fetchOffers();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <Router>
        <Header></Header>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route path="/" element={<Home offers={data.offers} />} />
            <Route path="/offer/:id" element={<Offer offers={data.offers} />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
