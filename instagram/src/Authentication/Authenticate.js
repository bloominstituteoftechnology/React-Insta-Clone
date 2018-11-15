import React from 'react';
// import App from './App';
import Login from '../components/Login/Login';

const Authenticate = App => {
    return (
        class extends React.Component {
            constructor() {
                super();
                this.state = {
                    loggedIn: true,
                }

            }

            componentDidMount() {
                console.log(this.state.loggedIn)
                let loginStatus;
                if (localStorage.getItem('username')) {
                    loginStatus = true;
                } 
                this.setState({
                    loggedIn: loginStatus,
                    
                })
                console.log(this.state.loggedIn)
            }

            render() {
                if (this.state.loggedIn) {
                    console.log("Logged In")
                    return <App/>
                } else {
                    console.log("NOT Logged In")
                    return <Login
                        login={this.login}
                        usernameText={this.state.usernameText}
                        handleChange={this.handleChange}
                    />
                }
            }
        }
    )
}

export default Authenticate;