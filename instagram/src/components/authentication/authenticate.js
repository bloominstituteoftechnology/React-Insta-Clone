import React from 'react';

const Authenticate = PassedComponent =>
    class App extends React.Component {
        constructor(){
            super();
            this.state={
                loggedIn : false,
            };
        }

        componentDidMount(){
            if(!localStorage.getItem('user')){
                this.setState({loggedIn : false});
            }
            this.setState({loggedIn : true});
        }

        render() {
            if(this.state.loggedIn === true){//I just put the true here for clarity for myself
                return <PassedComponent />;
            }
        }
    };

export default Authenticate;