import React from 'react';

const authenticateHOC = App => {
    return class extends React.Component {
        render() {
            return <App />
        }
    }
}

export default authenticateHOC;