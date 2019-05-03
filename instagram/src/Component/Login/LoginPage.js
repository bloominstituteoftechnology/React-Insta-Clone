import React from "react";

import styled from 'styled-components';

const Loginpage = styled.form`
margin-left:400px;
border:2px solid black;
margin-right:400px;
text-align:center;
margin-top:150px;
margin-bottom:40px;
height:500px;

`;
const Input = styled.input`
height:40px;
width:200px;
text-align:center;
font-size:20px;
`;


const Input1 = styled.input`
height:40px;
width:200px;
margin-top:20px;
text-align:center;
font-size:20px;
`;
const Button = styled.button`
height:40px;
width:100px;
margin-top:20px;
font-size:20px;
`;
const H1 = styled.h1`
font-family:cursive;

`

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

    }

    handleInputChange = e => {
     
        this.setState({ [e.target.name]: e.target.value })
    }

    loginAttempt = e => {
        const user = this.state.username;
        localStorage.setItem("user", user);
        window.location.reload();
    };



    render() {
        return (
            <Loginpage>
               <div>
                <H1>Welcome to Instagram</H1>
                <h2>LogIn</h2>
                </div>

                <div>
                    <div>
                <Input
                    className="login-user"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleInputChange} />
                    </div>

                    <div>

                <Input1
                    className="login-Password"
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputChange} />
                    </div>
                    
                 <div>
                <Button type="submit" onClick={this.loginAttempt}>
                    LogIn
        </Button>
        </div>
        </div>

            </Loginpage>

        )
    }
}

export default LoginPage;