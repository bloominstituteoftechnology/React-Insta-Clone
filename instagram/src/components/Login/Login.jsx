import React from 'react';
import './LoginStyles.css';

const Login = props => {
    return (
        <div className='login-container'>
            <div className='username'>
                <form>
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                    />
                </form>
            </div>
            <div className='password'>
                <form>
                    <input
                        type="text"
                        placeholder="password"
                        name="password"
                    />
                </form>
            </div>
            <button>login</button>
        </div>
    )
}

export default Login