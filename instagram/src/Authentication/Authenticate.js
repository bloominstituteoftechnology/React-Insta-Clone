import React, {Component} from 'react';

const Authenticate = App => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false,
            };
        }

        /* Lifecycle Methods */

        componentDidMount() {
            localStorage.getItem();
        }

        render () {
            return this.state.loggedIn ? <App /> : <LoginPage />;
        }
    };
};

export default Authenticate;