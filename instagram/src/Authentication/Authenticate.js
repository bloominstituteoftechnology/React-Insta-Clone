import React from 'react';
import App from '../App';
import Login from '../components/Login/Login';

const Authenticate = App => {
    return (
        class extends React.Component {
            constructor() {
                super();
                this.state = {
                    loggedIn: false,
                    usernameText: '',
                }

            }

            login() {
                localStorage.setItem('username', this.state.usernameText);
                // localStorage.setItem('password', '');
                this.forceUpdate();
            }

            componentDidMount() {
                let loginStatus = false;
                if (localStorage.getItem('username') !== '') {
                    loginStatus = true;
                } else {
                    loginStatus = false;
                }
                this.setState({
                    loggedIn: loginStatus,
                })
            }

            render() {
                if (localStorage.getItem('username') !== '') {
                    return <App/>
                } else {
                    return <Login
                        login={this.login}
                        usernameText={this.state.usernameText}
                        handleChange={this.handleChange}
                    />
                }
                // if (localStorage.getItem('username') !== '') {
                //     return <App/>
                // } else {
                //     return <Login/>
                // }
            }
        }
    )
}

export default Authenticate;