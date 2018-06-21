import React from 'react';
import './Login.css';
import { FormGroup } from 'reactstrap';
import { LoginContainer, LoginForm, InstagramWordContainer, InstagramWord, ForgotPassword, ForgotForm, BottomLoginContent, BottomText, SignUp, StyledFormControl, StyledButton } from '../ReusableComponents/Login';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = event => {
        this.setState({ username: event.target.value });
    }

    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    loginButton = () => {
        if (this.state.username === '' && this.state.password === '') {
            alert('You need to enter a username and password!');
            return;
        }
        if (this.state.username === '') {
            alert('You need to enter a username!');
            return;
        }
        if (this.state.password === '') {
            alert('You need to enter a password!');
            return;
        }

        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);

        window.location.reload();
    }

    render() {
        return (
            <LoginContainer>
                <LoginForm>

                    <InstagramWordContainer>
                        <InstagramWord src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='' />
                    </InstagramWordContainer>

                    <FormGroup>
                        <StyledFormControl autoComplete="off" value={this.state.username} onChange={this.handleUsername} type="username" name="username" id='username' placeholder="Username" />
                    </FormGroup>

                    <FormGroup>
                        <StyledFormControl value={this.state.password} onChange={this.handlePassword} type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>

                    <StyledButton style={this.state.username.length > 0 || this.state.password.length > 0 ? { background: '#3897F0' } : { opacity: .3 }} onClick={this.loginButton}>Log In</StyledButton>

                    <ForgotForm>
                        <ForgotPassword href='#_'>Forgot password?</ForgotPassword>
                    </ForgotForm>

                </LoginForm>

                <BottomLoginContent>

                    <BottomText>
                        Don't have an account? <SignUp href='#_'>Sign up</SignUp>
                    </BottomText>
                    
                </BottomLoginContent>

            </LoginContainer>
        );
    }
}

export default Login;