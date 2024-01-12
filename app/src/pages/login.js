import React, { useEffect, useState } from 'react';

function LoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);

        let timer;
        if (token) {
            const remainingTime = 30 * 60 * 1000; // 30 minutes in milliseconds
            timer = setTimeout(() => {
                localStorage.removeItem('token');
                setIsLoggedIn(false);
                alert('Session expired. Please log in again.');
            }, remainingTime);
        }

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="login-status">
            {isLoggedIn ? 'Logged In' : 'Not Logged In'}
        </div>
    );
}

export default LoginStatus;
