import React from 'react';
import LoginPage from '../LoginPage/LoginPage';

// import App from '../../App';

const Authentication = App => 
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                logged: false,
            }
        }
        render() {
            return (
                this.state.logged ? <App /> : <LoginPage />
            )
        }
    }

export default Authentication;