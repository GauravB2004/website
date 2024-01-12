import React, { useState } from 'react';
import { registerUser } from '../services/userService'; // Assume this service function exists
// import RegisterForm from '../components/RegisterForm';
import { useNavigate } from 'react-router-dom';


function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setusername] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            console.log("in handle register")
            const user = await registerUser({email : email, password : password,name: username });
            console.log("User registered successfully:", user);
            navigate('/login');
            // Redirect or perform another action
        } catch (error) {
            console.error("Failed to register:", error);
        }
    };

    return (
        <div>
            {/* <h1>Register</h1> */}
            
                {/* Form for registration details */}
                <input
                    type="email" placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* Your form component here */}

                <input
                    type="password" placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="name" placeholder='username'
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                />
                {/* Include other input fields as necessary */}
                <button onClick={handleRegister}>Register</button>
            </div>
        
    );
}

export default RegisterPage;
