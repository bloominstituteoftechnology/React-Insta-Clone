import React from 'react';
import './login.css';

import camera from '../../assets/camera.png';
import lambdagram from '../../assets/lambdagram.png';

class Login extends React.Component {
    handleLogin = (event) => {
        localStorage.setItem("InstagramUsername", event.target.user.value);
    }

    render() {
        return (
            <div className='login-container'>
                <div className='login-header'>
                    <div className='login-logo'>
                        <img src={camera} alt='Camera' />
                        <div className='divider'></div>
                        <img src={lambdagram} alt='Lambdagram' />
                    </div>
                </div>
                <form className='login-form' onSubmit={this.handleLogin}>
                    <label htmlFor='user'>Username:</label>
                    <input name='user' type='text'></input>
                    <label htmlFor='pw'>Password:</label>
                    <input name='pw' type='password'></input>
                    <input type='submit' value='Login'></input>
                </form>
            </div>
        );
    }
}

export default Login;
