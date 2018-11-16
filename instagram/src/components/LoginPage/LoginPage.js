import React from 'react';
import { LoginContainer, LoginForm, InstagramLogoText, InputContainer, InputUsername, InputPassword, LoginButton } from './StyledLoginPage';
import logo from '../../img/1024px-Instagram_logo.svg.png';
import './LoginPage.css';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handlesUsernameChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlesPasswordChange = event => {
        this.setState({
            [event.target.name]: this.showAsStars(event.target.value)
        })
    }

    setUsername = () => {
        if (this.state.username !== '' && this.state.password !== '') {
            localStorage.setItem('username', JSON.stringify(this.state.username));

            this.setState({
                username: '',
                password: '',
                userLoggedIn: true,
            })

            window.location.reload();
        } else {
            alert(`Incorrect username and/or password!`);
        }
    }

    render() {
        return(
            <LoginContainer>
                <LoginForm onSubmit={this.setUsername}>
                <InstagramLogoText src={logo} alt="Instagram Logo"/>
                    <InputContainer>
                        <InputUsername 
                            type="text"
                            name="username"
                            placeholder=" "
                            value={this.state.username}
                            onChange={this.handlesUsernameChange}
                            required
                        />
                        <label>Username</label>
                    </InputContainer>
                    <InputContainer>
                        <InputPassword 
                            type="password"
                            name="password"
                            placeholder=" "
                            value={this.state.password}
                            onChange={this.handlesUsernameChange}
                            required
                        />
                        <label>Password</label>
                    </InputContainer>
                    <button className={this.state.password || this.state.username ? "login-button unfaded" : "login-button"} type="submit">Log in</button>
                </LoginForm>
            </LoginContainer>
        );
    }
}

export default LoginPage;