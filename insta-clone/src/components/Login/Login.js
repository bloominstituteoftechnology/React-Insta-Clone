import React from 'react';

import { LoginWrapper } from '../Styles/Styles';

const Login = props => {
    return (
        <LoginWrapper>
            <div>
                <h2>Please login to continue {}</h2>
                <form onSubmit={props.toggle}>
                    <input 
                        name='username'
                        type='text'
                        placeholder='Username'
                        onChange={props.onchange}
                        value={props.username}
                    />
                    <input
                        name='userpass'
                        type='password'
                        placeholder='Password'
                        onChange={props.onchange}
                        value={props.userpass}
                    />
                    <button onClick={props.checkPassword}>ENTER</button>
                </form>
            </div>
        </LoginWrapper>
    )
}

export default Login;