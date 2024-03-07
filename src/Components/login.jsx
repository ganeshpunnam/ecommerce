import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Cookies from "js-cookie";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Retrieve stored name and password from cookies
    const storedName = Cookies.get("name");
    const storedPassword = Cookies.get("password");

    if (name === storedName && password === storedPassword) {
      alert("Login successful!");
      navigate("/Home"); 
    } else {
      alert("Incorrect name or password. Please try again.");
    }
  };

  const handleRegister = () => {
    navigate("/Register");
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="inputContainer">
          <label>Name</label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="inputContainer">
          <label>Password</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="button">
          Submit
        </button>
        <button type="button" className="button2" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
