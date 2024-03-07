import react from 'react';
import "./Header.css"; // Make sure to correct the CSS file name
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';



const Header = ({setdata}) => {
    const navigate = useNavigate();
    const name1 = Cookies.get('name');
    const imgURL = Cookies.get('img'); 
 const sreachHandel= (event)=>{
    const inputValue = event.target.value;
    setdata(inputValue);
}

    return (
        <header className="header">
            <div className="header-container">
                <h1 className="logo">Ganesh App</h1>
                <input onChange={sreachHandel}/>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
                <div className="user-section">
                    <div className="user">
                    <span className="user-name">Welcome, {name1}</span>
                    </div>
              <img
                src={imgURL}
                alt="Profile Picture" onClick={()=> navigate('/profile')}
                style={{ maxWidth: "40px", maxHeight: "40px", borderRadius:"10px"}}
              />
           <button onClick={()=> navigate('/AddtoCart')}>Cart</button>
                    <button className="logout-btn" onClick={() => navigate('/')}>Logout</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
