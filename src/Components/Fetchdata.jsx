import React, { useEffect, useState } from "react";
import './Fetchdata.css';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Method2 = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTerm2, setSearchTerm2] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const gg = Cookies.get('name');
   const imgURL = Cookies.get('img');  // Get the URL from the 'img' cookie

    useEffect(() => {
        fetchData();
        console.log(imgURL)
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
            const jsonData = await response.json();
            setData(jsonData.drinks);
            setFilteredData(jsonData.drinks);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const filterData = (term) => {
        const filteredData = data.filter((item) => {
            return item.strGlass.toLowerCase().includes(term.toLowerCase());
        });
        setFilteredData(filteredData);
    };

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        filterData(term);
    };

    const profile = () => {
        alert("First Name: " + gg);
        navigate('/Profile');
    };

    // useEffect(() => {
    //     console.log("Image URL:", imgURL);
    // }, [imgURL]); // Log the image URL whenever it changes

    return (
        <div className="maindiv">
            <div className="inputs">
                <input value={searchTerm} onChange={handleSearch} placeholder="Search by Glass"/>
                <input value={searchTerm2} onChange={(event) => setSearchTerm2(event.target.value)}  placeholder="Search"/>
                <button onClick={profile}>Profile</button>
                <button onClick={()=>navigate('/')}>Logout</button>
            </div>
            
            {imgURL ? (
              <img
                src={imgURL}
                alt="Profile Picture"
                style={{ maxWidth: "300px", maxHeight: "300px" }}
              />
            ) : (
              <p>No image found</p>
            )}

            <div className="grid-container">
                {filteredData.map((eve) => (
                    <div key={eve.idDrink} className="subdiv">
                        <h1>{eve.strGlass}</h1>
                        <img alt="profile-pic" src={eve.strDrinkThumb} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Method2;
