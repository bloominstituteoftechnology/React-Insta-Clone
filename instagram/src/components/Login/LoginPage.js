import React from 'react';
// needs styling

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <form className="login-form">
                <h3>Welcome to React Insta Clone</h3>
                <div>Please Login</div>
                <div>
                    <input 
                        type="text"
                        placeholder="User Name"
                        name="username"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button color="red" size="large" onClick={this.handleLoginSubmit}>
                        Log In
                    </button>
                </div>
            </form>
        );
    }
}

export default LoginPage;