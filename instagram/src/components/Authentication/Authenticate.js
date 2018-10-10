import React from 'react';

const Authenticate = Component => {
    return class WrappedComponent extends React.Component {
        render() {
            return ( <Component /> );
        }
    }
};

export default Authenticate;