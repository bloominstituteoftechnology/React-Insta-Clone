//the job of authenticate is to distinguish between the login page or the app based on some criteria

// Inside of Authenticate we need to add a constructor to hold our state data.
// On state we need a user loggedIn boolean flag.
// On componentDidMount we need to check localStorage to see if a user is logged in.
// Inside of the render function we will check if a user is logged in
// If a user is logged in we will return the <App />, else we will return the <LoginPage>

import React from 'react';
import Login from '../Login/Login';



const Authenticate = App =>
    class extends React.Component {

        constructor (props) {
            super(props);
            this.state = {
                loggedIn: false
            };
        }

componentDidMount() {
//use componentDidMount because to run this after the render
console.log(2);
//if not logged in, enter user name
    if (!localStorage.getItem('user')) {
        this.setState({ loggedIn: false });
    }else{
        this.setState({ loggedIn: true });
    };
}

        //set up our state so that we have some conditional logging
        render () {//runs first and returns login page
            console.log(1);
            //if user is logged in render app
            if (this.state.loggedIn) 
            return <App />;
            //else render a login component
            return <Login />;
        }
    };

export default Authenticate;