import React from 'react';

const Authenticate = App => {
    return class WrappedComponent extends React.Component {
        render() {
            return ( <App /> );
        }
    }
};

export default Authenticate;