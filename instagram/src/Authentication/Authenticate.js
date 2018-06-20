import React from 'react';
import Login from '../components/Login/Login';

const Authenticate = App => 
    class extends React.Component {
        render() {
            console.log(App.login);
            return <App />;
        }
    }


export default Authenticate
