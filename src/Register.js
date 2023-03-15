import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Register.css";
import {url} from "./url";

function Register() {
const navigate = useNavigate();
 const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name:"",
    email: "",
          password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/register`, formData);
      if (response && response.data && response.data.success) { 
        setSuccess("User registered successfully! Please log in.");
        console.log({success})
        navigate("/login", { state: { success } });
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError(err.response.data.error);
    }
  };

  return (
    <div className="register-container container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
                          />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
