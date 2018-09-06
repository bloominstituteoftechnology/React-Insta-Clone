import React from 'react';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    logIn = e => {
        //set localStorage
        const username = this.state.username;
        localStorage.setItem('user', username);
        window.location.reload();
    };

    
    render() {
        return (
            <div>
    <form className="login" onSubmit={this.logIn}>
        <input 
        type="text"
        name="username"
        value={this.state.username}
        placeholder="Enter username"
        onChange={this.handleInput}
        />
        <input
        type="text"
        name="password"
        value={this.state.password}
        placeholder="Enter password"
        onChange={this.handleInput}
        />
        <button onClick={this.logIn}>Login</button>
    </form>
    </div>
        )
    }

}

export default Login;