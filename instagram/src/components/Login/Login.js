import React from 'react';
import { LoginH1, LoginForm, LoginFormInput, LoginFormButton, LoginFormH3 } from '../../Styles';

const Login = props => {

    return (
        <div>
            <LoginH1>Login</LoginH1>
                <LoginForm onSubmit={props.loginEvent}>
                    <LoginFormInput type="text" placeholder="Username" onChange={props.handleUsername} />
                    <LoginFormInput type="password" placeholder="Password" onChange={props.handlePassword} />
                    <LoginFormButton>Login</LoginFormButton>
                </LoginForm>

                <LoginFormH3>Hint: user: shawn</LoginFormH3>
                <LoginFormH3>Hint: password: cat</LoginFormH3>
        </div>
    );
}

export default Login;