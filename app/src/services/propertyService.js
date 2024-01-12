import axios from 'axios';

// Base URL of your API
const API_URL = 'http://localhost:3000/api/properties';


export const getAllProperties = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // array of properties
    } catch (error) {
        console.error("Error fetching properties:", error);
        throw error;
    }
};

export const getPropertyById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; // single property details
    } catch (error) {
        console.error(`Error fetching property with id ${id}:`, error);
        throw error;
    }
};

export const createProperty = async (propertyData) => {
    try {
        const response = await axios.post(API_URL, propertyData);
        return response.data; // created property
    } catch (error) {
        console.error("Error creating new property:", error);
        throw error;
    }
};



// Add more functions as necessary for updating, deleting, etc.
