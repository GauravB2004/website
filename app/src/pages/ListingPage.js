import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { getAllProperties } from '../services/propertyService';
// import Property from '../../../../server/models/Property';
import AdminPage from './AdminPage';

function ListingPage() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        getAllProperties().then((data) => {
            setProperties(data);
        });
    }, []);

    return (
        <div>
            <h1>Property Listings</h1>
            <div className="listings-grid">
                {properties.map((property) => (
                    <PropertyCard key={property._id} property={property} />
                ))}
            </div>
        </div>
    );
    
}

export default ListingPage;
