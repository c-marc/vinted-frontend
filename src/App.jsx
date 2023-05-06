import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import OfferAdd from "./pages/OfferAdd";

function App() {
  const [token, setToken] = useState(Cookies.get("tokenVinted"));

  const handleToken = (token) => {
    if (token) {
      Cookies.set("tokenVinted", token, { expires: 7 });
      setToken(token);
    } else {
      Cookies.remove("tokenVinted");
      setToken(null);
    }
  };

  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <Router>
        <Header
          token={token}
          handleToken={handleToken}
          search={search}
          setSearch={setSearch}
        ></Header>

        <Routes>
          <Route
            path="/"
            element={<Home search={search} setSearch={setSearch} />}
          />
          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route
            path="/offer/publish"
            element={
              token ? <OfferAdd token={token} /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
