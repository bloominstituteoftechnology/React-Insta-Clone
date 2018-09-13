import React from 'react';
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
                this.state.logged ? <App /> : null
                // this.state.logged ? <App /> : <Login />
            )
        }
    }

export default Authentication;