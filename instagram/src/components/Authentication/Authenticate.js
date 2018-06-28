import React from 'react';

const Authenticate = Component => 
    class extends React.Component {
        render() {
            return <Component />;
        }
}


// If user is logged in (or exists in the local storage), render the app 
// If user is not logged in, render a log in page



export default Authenticate;