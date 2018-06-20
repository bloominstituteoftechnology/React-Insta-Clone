import React from "react";

import LoginPage from '../Login/LoginPage'

const Authenticate = App =>
  class extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isLoggedIn: false,
			user: {},
		}
	}
	logout = () =>{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
		this.setState({user: {}})
	  }

	componentDidMount(){
		this.authenticate();
	}

	authenticate(){
		if (localStorage.getItem('username')){
			this.setState({
				isLoggedIn: true,
				user: {
					username: localStorage.getItem('username'),
					password: localStorage.getItem('password')
				}
			})
		} else {
			this.setState({isLoggedIn: false})
		}
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.user.username !== this.state.user.username){
			this.authenticate();
		}
	}

    render() {
      return (
		  <div>
			<App logout={this.logout} user={this.state.user} authenticated={this.state.isLoggedIn}/>
		  </div>
		
	  ) 	
    }
  };

export default Authenticate;