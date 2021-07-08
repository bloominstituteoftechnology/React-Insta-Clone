import React from 'react';
import Login from '../Login/Login.js';

const Authenticate = PrivateComponent => {
    return class extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                loggedIn: false
            };
        }
        componentDidMount() {
            let user = window.localStorage.getItem('user');
            if(user){
                this.setState({loggedIn: true});
                Authenticate.userName = user
            }
        }
        render() {
            if(!this.state.loggedIn){
                return <Login />
            }
            //
            return <PrivateComponent {...this.props}/>;
        }
    };
}

export default Authenticate;
