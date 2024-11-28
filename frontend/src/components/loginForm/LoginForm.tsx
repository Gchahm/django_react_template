import React, {FormEvent} from "react";
import {CSRFToken} from "../CRSFToken/CRSFToken.tsx";

export const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await fetch('/api/auth/login/', {
            method: 'POST',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({username, password})
        }).then(resp => resp.json()).then(data => {
            console.log('data ->', data);
        }).catch(error => console.log('error ->', error))
    }

    return (
        <form onSubmit={handleLogin}>
            <CSRFToken/>
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
            {/*{error && <p>{error}</p>}*/}
        </form>
    );
};