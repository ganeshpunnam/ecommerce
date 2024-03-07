import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css'; 
import Cookies from 'js-cookie';

const Register = () => {

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);


  const handleSubmit = (event) => {
  event.preventDefault();
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (!selectedImage) {
    alert("Please select an image.");
    return;
  }

  alert("Registration successful!");
  const imageUrl = URL.createObjectURL(selectedImage);
  Cookies.set('name', firstName, { expires: 7 });
  Cookies.set('name2', lastName, { expires: 7 });
  Cookies.set('img', imageUrl, { expires: 7 });
  Cookies.set('password', password, { expires: 7 });
  Cookies.set('age', age, { expires: 7 });
  setFirstName("");
  setLastName("");
  setAge("");
  setPassword("");
  setConfirmPassword("");
  setSelectedImage(null);
};


  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h1>Register</h1>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Upload Image</label>
      <input type="file"  onChange={(event) => setSelectedImage(event.target.files[0])}/>
      </div>
      
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <select
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        >
          <option value="">Select Age</option>
          <option value="under18">Under 18</option>
          <option value="18to30">18 to 30</option>
          <option value="over30">Over 30</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-submit">Submit</button>
      <button onClick={() => navigate('/')} type="button" className="btn-submit">Login</button>
    </form>
  );
};

export default Register;