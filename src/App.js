import React, { useState } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import Register from "./Register";
import ContactUs from "./ContactUs";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/contactUs">ContactUs</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home isLoggedId={loggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setLoggedIn} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/contactUs"
          element={<ContactUs setIsLoggedIn={setLoggedIn} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
