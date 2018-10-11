import React from 'react';
import checkAuth from './checkAuth';
import Login from '../Login/Login';
import PostPage from '../PostContainer/PostPage';

const Authenticate =  App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                username: '',
                userpass: '',
                password: false,
            }
        }

        checkPassword = event => {
            event.preventDefault()
            if(this.state.userpass === 'password') {
                window.localStorage.setItem('password', true)
                this.setState({
                    // username: '',
                    userpass: '',
                })
            }
        }

        changeHandler = event => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        render() {
            return (
                <div>
                    <AuthCheck
                        username={this.state.username}
                        onchange={this.changeHandler}
                        userpass={this.state.userpass}
                        toggle={this.toggleTrueFalse}
                        checkPassword={this.checkPassword}
                        password={this.state.password}
                    />
                </div>
            )
        }
    };

const AuthCheck = checkAuth(Login)(PostPage);

export default Authenticate(PostPage);
