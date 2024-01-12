// Example structure for RegisterForm.js

import React, { useState } from 'react';

function RegisterForm() {
    // useState hooks for form fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
       
        // Registration logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />

            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />

            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />

            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;
