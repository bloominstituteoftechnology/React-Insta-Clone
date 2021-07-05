import React from 'react';
import Login from './../Login/Login';
const Authenticate = Check =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                login: false
            };
        }
        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({login: false});
            }
            else {
                this.setState({login: true});
            }
        }
        render() {
            if (this.state.login) 
                return <Check />;
                return <Login />
        }
    };

    export default Authenticate;