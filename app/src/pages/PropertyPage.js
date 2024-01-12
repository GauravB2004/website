import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetail from '../components/PropertyDetail';
import { getPropertyById } from '../services/propertyService'; // Assume this service function exists

function PropertyPage() {
    const [property, setProperty] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getPropertyById(id).then((data) => {
            setProperty(data);
        });
    }, [id]);

    return (
        <div>
            {property ? (
                <PropertyDetail property={property} />
            ) : (
                <p>Loading property details...</p>
            )}
        </div>
    );
}

export default PropertyPage;
