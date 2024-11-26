import React from "react";

export const CSRFToken = () => {
    const [csrftoken, setcsrftoken] = React.useState('');

    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    React.useEffect(() => {
        // TODO: call the API to get the CSRF token
        // const fetchData = async () => {
        //     try {
        //         await axios.get(`${process.env.REACT_APP_API_URL}/accounts/csrf_cookie`);
        //     } catch (err) {
        //
        //     }
        // };
        //
        // fetchData();
        setcsrftoken(getCookie('csrftoken'));
    }, []);

    return (
        <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken}/>
    );
}