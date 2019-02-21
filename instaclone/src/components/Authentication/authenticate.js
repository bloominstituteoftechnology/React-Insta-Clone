import React, { Component } from "react";


const Authenticate = App => Login =>{
  return class extends Component {
      constructor(){
          super();
          this.state ={loggedIn: false};
      } 
     componentDidMount(){
     if (!localStorage.getItem('user')){
       this.setState(
       {loggedIn: false} 
    );
     }else{ 
       this.setState({loggedIn: true})
      };
    }
    
    render() {
    if(this.state.loggedIn)  return <App /> 
    else {
      return <Login />
    }
    }
  };
}
// }

export default Authenticate;