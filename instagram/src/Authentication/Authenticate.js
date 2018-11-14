import React from 'react';


const Authenticate = App => {
    return class extends React.Component {
        constructor() {
            super();
        }
        
        render() {
            return <App />
        }
    }
}

export default Authenticate;