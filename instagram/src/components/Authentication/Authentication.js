import React from 'react';
import LoginPage from '../LoginPage/LoginPage';

const Authentication = App => 
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                logged: false,
            }
        }

        componentDidMount() {
            localStorage.getItem("username") ? this.setState({ logged: true }) : null;
        }
        render() {
                // if(this.state.logged) return <App />;
                // return <LoginPage />;
                return (
                    this.state.logged ? <App /> : <LoginPage />
                )
        }
    }

export default Authentication;