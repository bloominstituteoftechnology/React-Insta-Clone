import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div>
            <form /* onSubmit = {props.searchUsername} */>
                USERNAME INPUT FIELD:
                <input 
                    type = "text" 
                    // onChange = {props.searchFieldHandler}
                    placeholder = "Enter username"
                    // value = {props.activeValue}
                />
                PASSWORD INPUT FIELD:
                <input 
                    type = "text" 
                    // onChange = {props.searchFieldHandler}
                    placeholder = "Enter password"
                    // value = {props.activeValue}
                />
                <button> 
                    LOG IN!!!!!!!!!11
                </button>                
            </form>
        </div>
    )
}


// If user is logged in (or exists in the local storage), render the app 
// If user is not logged in, render a log in page

// The component should invoke the login function in app.js when a user logs in.
// This login function should set a username on localStorage. You'll need to check local 
// storage to see if a user is logged in.
// Be sure to force the page to reload when a user logs in so that our component un-mounts 
// and mounts again.



export default Login;