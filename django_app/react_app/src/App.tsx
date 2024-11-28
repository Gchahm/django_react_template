import React from 'react'
import './App.css'
import {DjangoApi} from "./api/DjangoApi.ts";

function App() {

    const handleLogin = async () => {
        const djangoApi = new DjangoApi();
        console.log('login');
        await djangoApi.login({username: 'master', password: 'pass'});
        djangoApi.api.apiAuthUserRetrieve().then((response) => {
            console.log(response)
        });
    };

    React.useEffect(() => {

        handleLogin()


    }, []);

    return (
        <>
            redux
        </>

    )
}

export default App
