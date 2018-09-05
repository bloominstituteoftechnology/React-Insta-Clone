import React, { Component } from 'react';

const Authenticate = App =>
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            }
        }
    render() {
        return <App />;
    }
};

export default Authenticate;