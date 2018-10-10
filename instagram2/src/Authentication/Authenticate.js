import React from 'react';


const Authenticate = App => {
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: ""
            };
        }
        componentDidMount() {
            if (localStorage.getItem(username)) {
                
            }
        }
        render() {
            if (this.state.loggedIn === true) {
                return (<App />)
                } else {
                return (<Login />)
                };
        }
    }
}
export default Authenticate;


//loggedIn === true ???
//CDM: if logged in then..., else....
//CDM is checking the status of logged in or not?  somehow using localStorage? 
//while render is only allowing access if logged in.