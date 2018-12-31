import React from 'react';
import './Login.css';

class Login extends React.Component{

    render(){
        return(
            <div ClassName="login-page">
                <form>
                    <input type="text" name="Username" value="Username"/>
                    <input type="text" name="Password" value="Password"/>
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;