import axios from 'axios';

// User related API URL
const USER_API_URL = 'http://localhost:3000/api/users';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${USER_API_URL}/register`, userData);
        return response.data; 
    } catch (error) {
        console.error("Error registering new user:", error);
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${USER_API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

