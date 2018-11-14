import React from "react";
import LoginPage from '../components/Login/LoginPage';

const Authenticate = WrappedComponent => {
    
    
    return class extends React.Component {
        constructor(){
            super();
            this.state=({
                loggedIn: false,
            })
    }

    componentDidMount =() =>{
        if(!(localStorage.getItem('username') === undefined)){
            this.setState({
                loggedIn: true,
            })
        }
    }

      render() {
        console.log(this.state);
        if (localStorage.getItem('username') == undefined) {
          return (<div className="login-screen">
            <LoginPage />
        </div>)
        } else {
          return <WrappedComponent />
        }
      }
    }
  }
  
  export default Authenticate;