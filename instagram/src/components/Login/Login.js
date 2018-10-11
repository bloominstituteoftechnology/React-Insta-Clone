import React from 'react';
//import './Login.css';
import {Button, Formdiv} from '../Styled-components/Styled-components.js'
import Styled from 'styled-components';

const Fieldwrap = Styled.div`
    margin-top : 20px;
`;

class Login extends React.Component {
    
    constructor (props) {
        //console.log("In Login " , props);
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    }

    handleInputChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    };

    handleLoginSubmit = (event) => {
        const user = this.state.username;
        localStorage.setItem('user', user)
        window.location.reload();
    }

    render() {
        
        return (
            <Formdiv>
                <h1>Welcome to Instagram Clone</h1>
                <h3> Login Page...</h3>

                <form>
                    <Fieldwrap>
                        <label>Username : </label>
                        <input 
                            type = "text"
                            name = "username"
                            value = {this.state.username}
                            onChange = {this.handleInputChange}
                        />
                    </Fieldwrap>
     
                    <Fieldwrap>
                        <label>Password : </label>
                        <input 
                            type = "password"
                            name = "password"
                            value = {this.state.password}
                            onChange = {this.handleInputChange}
                        />
                    </Fieldwrap>
                   
                    <Button onClick = {this.handleLoginSubmit}> 
                        Login 
                    </Button>
                </form>
            </Formdiv>
        )
    }
}

export default Login;


