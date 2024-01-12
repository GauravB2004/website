import React, { useState } from 'react';
import { createProperty } from '../services/propertyService';
import { useEffect } from 'react';
import axios from 'axios';

function AdminPage() {
    const [property, setProperty] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        
        // Add other fields as necessary
    });
     


    const [message, setMessage] = useState(''); 
    useEffect(() => {
        let timer;
        if (message) {
            // Clear the message after 3 seconds
            timer = setTimeout(() => setMessage(''), 3000);
        }
        return () => clearTimeout(timer); // Cleanup the timer
    }, [message]);

    const handleChange = (e) => {
        setProperty({ ...property, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createProperty(property);
            console.log("Property added:", response);
            setMessage('Property added successfully!');
            // Reset form or take other actions
        } catch (error) {
            console.error("Error adding property:", error);
            setMessage('Failed to add property. Please try again.');
        }

        

    };

    return (
        <div>
            {/* <h1>Admin Panel</h1> */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={property.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    name="description"
                    value={property.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <input
                    type="text"
                    name="price"
                    value={property.price}
                    onChange={handleChange}
                    placeholder="Price"
                />
                <input
                    type="text"
                    name="location"
                    value={property.location}
                    onChange={handleChange}
                    placeholder="Location"
                />
                {/* Add other input fields as needed */}
              
                <button type="submit">Add/Update Property</button>
            </form>
            {message && <div>{message}</div>} {/* Display message */}
        </div>
    );
}

export default AdminPage;
