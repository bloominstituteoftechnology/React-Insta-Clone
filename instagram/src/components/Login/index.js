import React from 'react';
import { Alert } from 'reactstrap';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    SumbitLogin = (event) => {
        const userLogin = this.state.username;
        localStorage.setItem('username', userLogin);
        window.location.reload();
    };

    render() {
        return (
            // <div>
            //     <form className='login-form'>
            //         <h2>Insta Clone Login</h2>
            //         <p>Please Enter Your Login Info</p>
            //         <input type='text' placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} />
            //         <input type='text' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} />
            //         <button onClick={this.SumbitLogin}> Log In </button>
            //     </form>

            //     <Alert color="primary">
            //     This is a primary alert — check it out!
            //     </Alert>
            // </div>
                <WrapperDiv>
                <form className='login-form'>
                    <h2>Insta Clone Login</h2>
                    <p>Please Enter Your Login Info</p>
                    <input type='text' placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} />
                    <input type='text' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} />
                    <button onClick={this.SumbitLogin}> Log In </button>
                </form>

                <Alert color="primary">
                This is a primary alert — check it out!
                </Alert>
            </WrapperDiv>
        )
    }
}

export default Login;