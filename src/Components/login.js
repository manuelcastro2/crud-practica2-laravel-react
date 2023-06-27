import React, { useState } from 'react';
import axios from 'axios';
import './../css/create.css'

const LoginResidents = () => {
    const [correo, setEmail] = useState('');
    const [clave, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                correo,
                clave,
            });

            if (response.status === 200) {
                setLoggedIn(true);
                setUserData(response.data.user);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container-all">
            <div className='container-intermedate'>
                {!loggedIn ? (
                    <form onSubmit={handleLogin}>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={correo}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={clave}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                ) : (
                    <div>
                        <h2>Welcome, {userData?.nombre}</h2>
                        <p>ID: {userData?.id}</p>
                        <p>Cedula: {userData?.cedula}</p>
                        <p>Email: {userData?.correo}</p>
                        <p>Clave: {userData?.clave}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LoginResidents;


