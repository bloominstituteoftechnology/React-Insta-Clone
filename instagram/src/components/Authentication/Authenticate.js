import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => 
    class extends React.Component {
    constructor(props) {
        super(props);

    }

        
        render() {
            
            if (window.localStorage.userLoggedIn){
            return <App />
            }else {
                return <Login login={this.props.login}/>
            }
           
        }
    };

export default Authenticate;
