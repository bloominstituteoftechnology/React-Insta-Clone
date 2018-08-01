import React from 'react';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ""
        }
    }

    login = () => {
        localStorage.setItem("username", `${this.state.username}`);
    }

    save = event => {
        this.setState({ username: event.target.value })
    }

    render() {
        return (
            <form  >
                <input type="text" placeholder="username" onChange={this.save} />
                <input type="text" placeholder="password" />
                <button onClick={this.login} >log in</button>
            </form>
        );
    }
    
};

export default LoginPage;