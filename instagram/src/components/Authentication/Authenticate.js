import React from 'react';

const Authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            };
        }

        componentDidMount() {
            if(!localStorage.getItem('user')) {
                this.setState({loggedIn: false});
            }
            else{
                this.setState({loggedIn: true });
            }
        }
        render() {
            return <App />;
        }
    };

export default Authenticate;