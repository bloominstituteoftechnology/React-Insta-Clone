import React from 'react';

const Authenticate = App => 
    class extends React.Component {  
        constructor() {
            super();
            this.state = {
                loggedIn: false
            };
        }

        render() {
            if(loggedIn === true) {
                return <App />;
            } else return <Login />;
        }
    };

export default Authenticate;