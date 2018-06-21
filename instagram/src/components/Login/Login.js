import React from 'react';
import styled from 'styled-components';

// import './Login.css';

// styled-components
const LoginContainer = styled.div`
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    margin: 20px auto;
    border-bottom: 1px solid lightgrey;

    form {
        width: 410px;
        display: flex;
        justify-content: space-between;
        

        button:hover {
            cursor: pointer;
        }
    }
`;

const LoginHeader = styled.div`
    width: 200px;
    display: flex;
    font-size: 26px;
    font-family: 'Lobster', cursive;

    div {
        padding: 0 20px;

        :first-child {
            border-right: 2px solid grey;
        }

        &:hover {
            cursor: pointer;
        }
    }
`;

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
                    this.setState({username: this.state.username});
                } else {
                    this.setUser();
                }
            }

            setUser = () => {
                localStorage.setItem("username", this.state.username);
                // localStorage.setItem("password", this.state.password);
            };

            handleUserChange = (e) => {
                this.setState({username: e.target.value});
            };

            handlePassChange = (e) => {
                this.setState({password: e.target.value})
            };

            handleSubmit = (e) => {
                e.preventDefault();

                const newUsername = this.state.username;
                // const newPassword = this.state.password;

                this.setState({
                    username: newUsername,
                    // password: newPassword
                });

                setTimeout(() => {
                    this.setUser();
                    window.location.reload()
                }, 500);
            };

            render() {
                return (
                    <LoginContainer>
                        <LoginHeader>
                            <div><i className="fas fa-camera"></i></div>
                            <div>Instaclone</div>
                        </LoginHeader>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={this.state.username}
                                name="username"
                                placeholder="username"
                                onChange={this.handleUserChange}
                            />
                            <input 
                                type="text"
                                value={this.state.password}
                                name="password"
                                placeholder="password"
                                onChange={this.handlePassChange}
                            />
                            <button type="submit">Log In</button>
                        </form>
                    </LoginContainer>
                );
            }
        }
    );
};

export default Login;