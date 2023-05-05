import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(Cookies.get("token"))
  );

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 2 });
      setIsAuthenticated(true);
    } else {
      Cookies.remove("token");
      setIsAuthenticated(false);
    }
  };

  return (
    <div className="app">
      <Router>
        <Header
          isAuthenticated={isAuthenticated}
          handleToken={handleToken}
        ></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
