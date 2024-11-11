import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Regex patterns
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,}$/;

    const handleLogin = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (!usernameRegex.test(username)) {
            alert('Username must be 3-20 alphanumeric characters.');
            return;
        }
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters and can include special characters.');
            return;
        }

        const response = await fetch('http://localhost:5000/api/employee/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (data.token) {
            localStorage.setItem('authToken', data.token);
            navigate('/employee-dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default EmployeeLogin;
