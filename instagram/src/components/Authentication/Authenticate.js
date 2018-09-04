import React from "react";
import Login from "../Login/Login";
import PostsPage from '../PostContainer/PostsPage';


const Authenticate = App =>
  // set up our state so that we have some conditional logging
  class extends React.Component {
	  constructor(){
			super();
			this.state = {
				loginSuccess: false,
				possibleUsers: [
					{name: 'marshall', login: '1234'},
					{name: 'philzcoffee', login: 'buzz'},
					{name: 'biancasaurus', login: 'roar'},
					{name: 'fortnite', login: 'pwned'},
					{name: 'playhearthstone', login: 'pizza'}
				]
			};
		}

    // if user is logged in.. render app
    // else render a login component
    render() {

    	const names = Object.keys(localStorage);
    	const logins = Object.values(localStorage);

    	const newState = {...this.state};
    	
    	for (let i = 0; i < newState.possibleUsers.length; i++){
    		if (newState.possibleUsers[i].name === names[i] && newState.possibleUsers[i].login === logins[i]){
  				newState.loginSuccess = true;
    		}
    	}

    	if (newState.loginSuccess === true){
    		return (
    			<div className="container">
    				<PostsPage />
    			</div>
    		)
    	} else {
    		localStorage.clear();
    		return (
    			<div className="container">
    				<Login />
    			</div>
    		)
    	}

    }
  };
export default Authenticate;