import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }
        
        render() {
            return (
                <div>
                    <h2>please authenticate</h2>
                    <div>
                        <Login />
                        <App />
                    </div>
                </div>
            )
        }
    }
}

export default Authenticate;