import React from 'react';

import Login from '../Login/login';

const Authenticate = (App) => 
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            };
        }

        componentDidMount() {
            if (localStorage.getItem("InstagramUsername") !== null) {
              this.setState({ loggedIn: true });
            }
        }

        render() {
            let output = this.state.loggedIn ? <App /> : <Login />;
            return output;
        }
    };

export default Authenticate;
