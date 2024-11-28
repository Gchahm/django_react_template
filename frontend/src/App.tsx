import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {LoginForm} from "./components/loginForm/LoginForm.tsx";
import {ApiApi} from "./api/autogen";

const login = async (username: string, password: string) => {
    new ApiApi().apiAuthLoginCreate({username, password}).then((response) => {
        console.log('api response ->', response);
    });
    // the bellow works as long as the server allow all origins
    // fetch('http://localhost:8000/api/auth/login/', {
    //     method: 'POST',
    //     credentials: 'omit',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     },
    //     body:  JSON.stringify({username, password})
    // }).then(resp => resp.json()).then(data => {
    //     console.log('data ->', data);
    // }).catch(error => console.log('error ->', error))
}

function App() {
    const [count, setCount] = useState(0)

    React.useEffect(() => {
        console.log('Hello World');
        login('master', 'pass').then((response) => {
            console.log(response);
        });
        // const api = new ApiApi();
        // api.apiAuthLoginCreate({username: 'admin', password: 'pass'},
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'credentials': 'include',
        //             'X-CSRFToken': getCookie('csrftoken'), // Include CSRF token here
        //         }
        //     }
        // ).then((response) => {
        //     console.log(response);
        // });


    }, []);

    return (
        <>
            <LoginForm/>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
