import React, { Component } from "react";


const Authenticate = App => Login =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            };

        }

        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({loggedIn: false});
            } else {
                this.setState({loggedIn: true});
            }
        }
        render() {
            if (this.setState.loggedIn) return <App />;
            return <Login />;
        }
    }

export default Authenticate;