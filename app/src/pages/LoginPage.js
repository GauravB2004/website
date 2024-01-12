import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();



    // const token = jwt.sign({ userId: user._id, role: user.role }, 'your_secret_key', { expiresIn: '30m' });



    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/'); // Redirect to the homepage or dashboard after login
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Error data:", error.response.data);
                setLoginError(error.response.data.message || "Login failed");
            } else if (error.request) {
                // The request was made but no response was received
                console.error("Error request:", error.request);
                setLoginError("No response from server");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error message:", error.message);
                setLoginError("Error: " + error.message);
            }
        }
    };

    return (
        <div>
            {/* <h2>Login</h2> */}
            <form onSubmit={handleLogin}>
                <div>
                    
                    <input
                        type="email" placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    
                    <input
                        type="password" placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
            </form>
        </div>
    );
}

export default LoginPage;
