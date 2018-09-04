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
          {name: 'philzcoffee', login: '1234'},
					{name: 'marshall', login: '1234'},
					{name: 'biancasaurus', login: 'roar'},
					{name: 'fortnite', login: 'pwned'},
					{name: 'playhearthstone', login: 'pizza'}
				]
			};
		}

    // if user is logged in.. render app
    // else render a login component
    render() {

    	const name = Object.keys(localStorage);
    	const login = Object.values(localStorage);
      const userList = this.state.possibleUsers.map(item => item.name);
      const logs = this.state.possibleUsers.map(item => item.login);

      console.log(userList)
      console.log(logs)
      // console.log(name[0], login[0])

    	const newState = {...this.state};
    	
      if(userList.includes(name[0]) && logs.includes(login[0])){
        newState.loginSuccess = true;
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