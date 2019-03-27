import React from 'react'

const withAuthenticate = Component => Component2 =>
    class extends React.Component {
        render() {
            return localStorage.getItem('user') === null ? <Component /> : <Component2 />;
        }
    };

export default withAuthenticate;