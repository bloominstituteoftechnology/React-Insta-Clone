import React from 'react';
import Login from '../Login/Login';

const Authenticate = (App) => class extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            LoggedIn: false
        };

    }
    render() {
        if(this.state.loggdIn === true){
            return <App/>
        } else{
        return (<Login/>
        )
        }
    }
}


export default Authenticate;