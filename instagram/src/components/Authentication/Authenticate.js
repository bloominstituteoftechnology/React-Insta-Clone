import React from 'react';

const Authenticate = App => class extends React.Component {
    constructor(){
        super();
        this.state = {
            loggedIn: false
        }
    }
    render() {
        return <App />;
    };
};

export default Authenticate;