import React, { useState } from "react";
import axios from "axios";
import "./Signupp.css"; // Importing the CSS file
import {Link,useNavigate} from "react-router-dom";
const Signupp = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: ""
  });
   const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/signup", form);
      setMessage(res.data.message);
      
      if (res.data.success) {
        navigate("/", { replace: true });
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Error signing up");
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create an Account</h2>
      {message && <p className="signup-message">{message}</p>}
      <form className="signup-form" onSubmit={handleSubmit} action="/">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
     
        <button type="submit">Sign Up</button>
      
      </form>
    </div>
  );
};

export default Signupp;
