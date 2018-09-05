import React from 'react';

const Authenticate = PassedComponent => class extends React.Component {
    render () {
        return <PassedComponent />;
    }
}

export default Authenticate;
