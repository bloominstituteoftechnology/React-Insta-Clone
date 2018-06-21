import React from 'react';
import './style.css';
import styled from "styled-components";

const MyTitle = styled.h1`
  font-size: 2.4em;
  font-weight: 400;
  color: #11331C;
  margin: 0 auto;
`;

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: ''
         }
    }
    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value })
    }
    handleSubmit = () => {
        const user = this.state.username;
        localStorage.setItem(
            // set the user info: username: const user
            'username', user
        );
        window.location.reload();
    }
    render() { 
        return ( 
            <div className='loginPage'>
                <div className='loginWrapper'>
                <MyTitle> React-Insta-Clone </MyTitle>
                    <div className='inputField'>
                        <input type='text'
                            value={this.state.username}
                            name='username'
                            onChange = {this.handleChange}
                        />
                    </div>
                    <div className='inputField'>
                        <input type='password'
                        value={this.state.password}
                        name='password'
                        onChange = {this.handleChange}
                        />
                    </div>
                    <div className='inputField'>
                        <button onClick={this.handleSubmit}>
                        Log In  
                        </button>
                    </div>
                </div>
            </div>
         )
    }
}
 
export default LoginPage;