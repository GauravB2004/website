import React from 'react';

function PropertyCard({ property }) {
    return (
        <div className="property-card">
            <img src={property.images[0]} alt="Property" />
            <h3>{property.title}</h3>
            <p>Price: ${property.price}</p>
            {/* Add more details you want to show */}
        </div>
    );
}

export default PropertyCard;
