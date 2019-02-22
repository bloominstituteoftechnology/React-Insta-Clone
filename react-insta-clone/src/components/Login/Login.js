import React from "react";
import styled from 'styled-components';

const LoginPage = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20%;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
`;

const InputField = styled.input`
        margin-bottom: 10px;
        border-radius: 3px;
        font-size: 16px;
        width: 200px;
        line-height: 1.2;
        box-shadow: 0px 3px 10px rgba(0,0,0,.25);
`;

const LoginButton = styled.button`
        font-size: 14px;
        width: 100px;
        border-radius: 5px;
        box-shadow: 0px 3px 10px rgba(0,0,0,.25);
`;

class Login extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        username: "",
                        password: ""
                };
        }

        handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        //reusable input handler based on target.name
        //computed property syntax => get the computational value of [e.target.name]
        //same as this.setState({ "username": e.target.value, "password": e.target.value });
        };
        
        handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem("user", user);
        //set 'user' equal to username in local storage
        window.location.reload();
        //relaod AFTER you set the user item
        };

        render(){
                //both inputs invoke handleInputChange
                return (
                <LoginPage>
                <InputField
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                />
                <InputField
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                />
                <LoginButton onClick={this.handleLoginSubmit}>Login</LoginButton>
                </LoginPage>
                )
        }
}

export default Login;