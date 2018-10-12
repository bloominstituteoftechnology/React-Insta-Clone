import React from 'react';
import './Login.css'
import styled from 'styled-components';

const LoginContainer = styled.div`
    width: 66%;
    height: 500px;
    background: lightblue;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginTop = styled.span`
    width: 66%;
    height: 50px;
    margin: auto;
    background: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            password: '',
        }
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleLogin = e => {
        const user = this.state.username;
        localStorage.setItem('user', user)
        window.location.reload();
    }

    render() {
        return(
            <div>
                <LoginTop>
                    Please Log in.
                </LoginTop>
                <LoginContainer>
                    <form>
                        <input 
                            onChange={this.handleInput} 
                            placeholder="username" 
                            type="text"
                            value={this.state.username}
                            name='username'
                        />
                        <input 
                            onChange={this.handleInput} 
                            placeholder="password" 
                            type="password"
                            value="this.state.password"
                            name="password"
                        />
                        <button 
                            type="Submit"
                            onClick={this.handleLogin}
                        >
                            Login
                        </button>
                    </form>
                </LoginContainer>
            </div>
        );
    }
}

export default Login;