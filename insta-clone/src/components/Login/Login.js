import React from 'react';
import './Login.css';

class Login extends React.Component {

    render() {
        return (
            <div className='authorize'>
                <div className='userLogin'>
                    <h2>Please login to continue {}</h2>
                    <form className='loginForm'>
                        <input name='username' type='text' placeholder='Username' />
                        <input name='password' type='password' placeholder='Password' />
    
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;