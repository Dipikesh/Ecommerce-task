import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import {url} from "./url";
import { useLocation } from "react-router-dom";

const Login = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location",location.state)
 const successMessage = location.state && location.state.success;
 console.log("successMessage",successMessage)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/login`, {
        email:username,
        password,
      });
      console.log({response})
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true)
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response.data.error.message)
      alert(err.response.data.error.message);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <div className="mt-3">
          Don't have an account? <Link to="/register">Register here.</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
