import React from 'react';
import logo from './logo.jpeg'; // Adjust the path to your logo image

function HomePage() {
    return (
        <div className="home-container">
            <div className="logo-container">
                <img src={logo} alt="Company Logo" className="company-logo" />
            </div>
            <div className="company-info">
                <h1>Better Homes for Next Generation Urban Living</h1>
                <p>Changing Home Ownership & Living Experience for Landlords and Tenants.</p>
                <p>We are a new age real estate services company founded with the objective of redefining the living experience for Tenants and simplifying the ownership experience for Landlords.</p>
            </div>
        </div>
    );
}

export default HomePage;
