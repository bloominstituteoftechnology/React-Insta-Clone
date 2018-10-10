import React from 'react';

const Authenticate = PassedComponent =>
    class App extends React.Component {
        constructor(){
            super();
            this.state={};
        }
        render() {
            return <PassedComponent />;
        }
    };

export default Authenticate;