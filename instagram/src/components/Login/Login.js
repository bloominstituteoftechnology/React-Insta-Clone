import React from 'react';

// Set state and local storage, return form
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
                if(localStorage.getItem('username')) {
                    this.setState({username: this.state.username})
                } else {
                    this.setUser();
                }
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

                this.setState({
                    username: newUsername,
                    password: newPassword
                });

                setTimeout(() => {
                    this.setUser();
                    window.location.reload()
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