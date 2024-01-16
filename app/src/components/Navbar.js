import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



    function Navbar() {


        const navigate = useNavigate();
        const isLoggedIn = !!localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from local storage
        navigate('/login'); // Redirect to login page
    };


        return (
            <div className="navbar">
                <div className="navbar-left">
                    <a href="/"> Homepage </a>
                </div>
                {/* <div className="navbar-right">
                    <a href="/link1">Link 1</a>
                    <a href="/link2">Link 2</a>
                    Add more links as needed */}
<nav>
{isLoggedIn && <button onClick={handleLogout} className="logout-button">Logout</button>}
            
            <Link to="/listings">Listings</Link>
           <Link to="/login">Login</Link>
           <Link to="/register">Register</Link>
           {/* Add more links as needed */}
       </nav>

                </div>
            
        );
    }
    


export default Navbar;
