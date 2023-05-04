import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(Cookies.get("token"))
  );

  const login = (token) => {
    Cookies.set("token", token, { expires: 2 });
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
  };

  return (
    <div className="app">
      <Router>
        <Header isAuthenticated={isAuthenticated} logout={logout}></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<Signup login={login} />} />
          <Route path="/login" element={<Login login={login} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
