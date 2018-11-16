import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        .login-container {
            width: 350px;
            max-width: 100%;
            background-color: #fff;
            border: 1px solid #e6e6e6;
            h1 {
                background-image: url(https://www.instagram.com/static/bundles/base/sprite_core.png/00b79edf00fd.png);
                margin: 22px auto 12px;
                display: block;
                background-repeat: no-repeat;
                background-position: -98px -150px;
                height: 51px;
                width: 175px;
                color: rgba(0, 0, 0, 0);
            }
            form {
                height: 333.5px;
                border-radius: 1px;
                display: flex;
                flex-direction: column;
                input {
                    margin: 0 40px 6px;
                    border-radius: 3px;
                    font-size: 0.9rem;
                    border: 1px solid #efefef;
                    background: #fafafa;
                    padding: 9px 0 7px 8px;
                }
                button {
                    background-color: #3897f0;
                    border: 1px solid #3897f0;
                    color: #fff;
                    padding: 5px 9px;
                    margin: 8px 40px;
                    border-radius: 4px;
                    line-height: 18px;
                    font-size: 14px;
                }
            }
        }
    }
    footer {
        padding: 0 20px;
        flex-shrink: 0;
    }
`;
class Login extends Component {
    constructor() {
        super();
        this.state = {
            userNameInput : '',
            passwordInput : ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitCredentials = (event) => {
        localStorage.userName = event.target[0].value;
        localStorage.password = event.target[0].value;
        if (event.target[0].value !== '') {
            localStorage.loggedIn = true;
        }
    };

    render() {
        return (
            <Div>
                <main>
                    <div className="login-container">
                        <h1>Instagram</h1>
                        <form
                            onSubmit={(event) => {
                                this.submitCredentials(event);
                            }}>
                            <input
                                type="text"
                                placeholder="Phone number, username, or email"
                                name="userNameInput"
                                value={this.state.userNameInput}
                                onChange={this.handleChange}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="passwordInput"
                                value={this.state.passwordInput}
                                onChange={this.handleChange}
                            />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </main>
                <footer>test</footer>
            </Div>
        );
    }
}

export default Login;
