import React from 'react';
import LoginPage from '../Login/LoginPage';

const authenticate = WrappedComponent => {
	return class extends React.Component {

		constructor() {
		    super();
		    this.state = {
		      loggedIn: false
		    };
		}

		componentDidMount() {
		    //check local storage to see if user is logged in
		    let currentUsername = localStorage.getItem('currentUsername');
		    console.log(currentUsername);
		    if (currentUsername != null) {
	    		let now = new Date();
	    		let createdAt = new Date(localStorage.getItem('createdAt'));
	    		console.log(createdAt);
	    		let timeDiffInMs = now.getTime() - createdAt.getTime();
	    		let fiveSecondsInMs = 5*1000;
		    	console.log(timeDiffInMs);
		    	if(timeDiffInMs < fiveSecondsInMs){
			    	this.setState({ 
				        loggedIn: true
				    });
				}
			}
		}

		logUserIn(){
			let now = new Date();
			localStorage.setItem('currentUsername', 'alexcartaz');
			localStorage.setItem('createdAt', now);
			window.location.reload();
		}

	    render() {
	    	if(this.state.loggedIn){
	      		return <WrappedComponent />;
	      	}else{
	      		return <LoginPage onClick={this.logUserIn} />
	      	}
	    }
	};
}

export default authenticate;