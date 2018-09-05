import React from 'react';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    logIn = (e) => {
        e.preventDefault();
        localStorage.setItem('username', e.target[0].value);
        window.location.reload();
    }

    render() {
        return (
            <div>
                <form onSubmit = { this.logIn } >
                    <input type = 'text' placeholder = 'Enter username...' />
                    {/* <input type = 'text' placeholder = 'Enter password...' /> */}
                    <button type = 'submit' >Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;
