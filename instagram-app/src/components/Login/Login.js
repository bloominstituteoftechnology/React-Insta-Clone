import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onFormChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    };

    submit() {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onFormChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                />

                <button
                  onClick={this.submit}
                >Login</button>
            </form>
        );
    }
}

export default Login;