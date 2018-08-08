import React from 'react';

class Login extends React.Component {
    render () {
        return (
            <div className="Login">
                <h1>Login Information</h1>
                <input type="text" placeholder="Enter Username"/>
                <input type="text" placeholder="Enter Password"/>
            </div>  
        )
    }
} 


export default Login;