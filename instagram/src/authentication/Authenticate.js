// Inside of Authenticate we need to add a constructor to hold our state data.
// On state we need a user loggedIn boolean flag.
// On componentDidMount we need to check localStorage to see if a user is logged in.
// Inside of the render function we will check if a user is logged in
// If a user is logged in we will return the <App />, else we will return the <LoginPage>


import React from 'react';

const Authenticate = App =>
    class extends React.Component {

        constructor () {
            super();
            this.state = {

            };
        }




        //set up our state so that we have some conditional logging
        render () {
            //if user is logged in render app
            //else render a login component
            return <App />
        }
    }