import React from 'react';

function PropertyDetail({ property }) {
    return (
        <div className="property-detail">
            <h1>{property.title}</h1>
            <img src={property.images[0]} alt="Property" />
            {/* Render all images as a gallery perhaps */}
            <p>{property.description}</p>
            {/* Add more detailed information about the property */}
        </div>
    );
}

export default PropertyDetail;
