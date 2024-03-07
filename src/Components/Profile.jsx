import React from "react";
import Cookies from "js-cookie";
import './Profile.css'; // Import CSS file for profile styling
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
 
    const image1 = Cookies.get('img');
    const name1 = Cookies.get('name');
    const name2 = Cookies.get('name2');
    const password = Cookies.get('password');
    const age = Cookies.get('age');


    return (
        <div className="main">
            <button id="d" onClick={() => navigate('/Home') }>Back</button>
        <div className="profile-container">
            <img src={image1} alt="Profile Picture" className="profile-image" />
            <div className="profile-info">
                <div className="q">
                    <h2>First Name:</h2>
                    <p>{name1}</p>
                </div>
                <div className="q">
                    <h2>Last Name:</h2>
                    <p>{name2}</p>
                </div>
                <div className="q">
                    <h2>Age:</h2>
                    <p>{age}</p>
                </div>
                <div className="q">
                    <h2>Password:</h2>
                    <p>{password}</p>
                </div>
            </div>

        
           
        </div>
        <button id="d" onClick={() => navigate('/') }>Logout</button>
        </div>
    );
};

export default Profile;
