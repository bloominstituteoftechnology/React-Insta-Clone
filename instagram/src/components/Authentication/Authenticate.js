import React, { Component } from "react";
import Login from "../Login/login";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        online: false,
        constuser: "",
        constpass: "",
        tempuser: "",
        temppass: ""
      };
    }



    componentDidMount(){
      
      if (!localStorage.getItem('user')
      ) {this.setState({online: false});
      }else {
        this.setState({online: true});

      }
    }
    
    loginHandler = e =>{
      e.preventDefault();
      const user = this.state.tempuser;
       
      localStorage.setItem('user', user);
      window.location.reload();

      }
    




    userHandler = e => {
      this.setState({ tempuser: e.target.value });
      console.log(this.state.tempuser);
    };

    passHandler = e => {
      this.setState({ temppass: e.target.value });
      console.log(this.state.temppass);
    };

    render() {
      if (this.state.online) {
        return <App />;
      } else {
        return (
          <Login
            loggedin={this.loginHandler}
            user={this.userHandler}
            pass={this.passHandler}
          />
        );
      }
    }
  };

export default Authenticate;
