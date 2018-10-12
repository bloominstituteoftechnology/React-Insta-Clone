import React from 'react';

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
            <form className='login-form'>
                <h2>Insta Clone Login</h2>
                <p>Please Enter Your Login Info</p>
                <input type='text' placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} />
                <input type='text' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.SumbitLogin}> Log In </button>
            </form>
        )
    }
}

export default Login;