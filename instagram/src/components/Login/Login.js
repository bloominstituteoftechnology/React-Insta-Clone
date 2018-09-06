import React from 'react';
import './Login.css';
import styled from 'styled-components';

// Styled Component
const Div = styled.div `
    width: 200px;
    height: 400px;
    margin: 0 auto;
    margin-top: 250px;
    `

    
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    login = event => {
        event.preventDefault();
        localStorage.setItem("username", event.target.userInput.value);
        window.location.reload();
        console.log('in login', event.target);
    }



    render() {
        return (
            <Div >
                <p>Instagram Login Page</p>
                <form onSubmit={this.login}>
                    <input placeholder="enter username" name="userInput"/>
                </form>
            </Div>

        )
    }
}

export default Login;