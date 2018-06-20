import React from 'react';

const Login = props => {
    return (
        class extends React.Component {
            constructor() {
                super();
                this.state = {
                    username: "",
                    password: ""
                };
            }

            componentDidMount() {
                if(localStorage.getItem('username') !== null) {
                    this.setState({
                        username: localStorage.getItem('username'),
                        password: localStorage.getItem('password')
                    });
                } else {
                    this.setUser()
                }
            }

            componentWillUnmount() {
                this.setUser();
            }

            setUser = () => {
                localStorage.setItem("username", this.state.username);
                localStorage.setItem("password", this.state.password);
            };

            handleUserChange = (e) => {
                this.setState({username: e.target.value})
            };

            handlePassChange = (e) => {
                this.setState({password: e.target.value})
            };

            handleSubmit = (e) => {
                e.preventDefault();

                const newUsername = this.state.username;
                const newPassword = this.state.password;
                const username = this.state.username.slice();
                const password = this.state.password.slice();
                this.setState({
                    username: newUsername,
                    password: newPassword
                });

                setTimeout(() => {
                    this.setUser();
                }, 500);
            };

            render() {
                return (
                    <div className="login-container">
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={this.state.username}
                                placeholder="username"
                                onChange={this.handleUserChange}
                            />
                            <input 
                                type="text"
                                value={this.state.password}
                                placeholder="password"
                                onChange={this.handlePassChange}
                            />
                            <button type="submit">Log In</button>
                        </form>
                    </div>
                );
            }
        }
    );
};

export default Login;