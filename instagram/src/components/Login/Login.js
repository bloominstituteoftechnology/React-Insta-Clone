import React, { Component } from "react";

class Login extends Component {
    constructor() {
      super();
      this.state = {
        username:"",
        password:""
      };
    }
  // use componentDidMount to set dumyData on state
//   componentDidMount() {
//     // will be called third
//     if (window.localStorage.getItem("usernameInput")) {
//       this.setState({
//         posts: JSON.parse(window.localStorage.getItem("comments"))
//       }); // preferable for Async calls... AJAX
//     } else {
//       this.setState({ posts: dummyData }); // preferable for Async calls... AJAX
//     }
//     window.localStorage.setItem("comments", JSON.stringify(dummyData));
//   }
   
changeusername = event =>
    this.setState({
    //   usernameInput: event.target.value,
      username: event.target.value
    });

    changepassword = event =>
    this.setState({
    //   usernameInput: event.target.value,
      password: event.target.value
    });

  loginSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    localStorage.setItem("user", username);
    
    const password = this.state.password;
    localStorage.setItem("pasword", password);
   
    window.location.reload(); 

    // const comments = this.state.comments.slice();
    // comments.push({ text: this.state.input, username: "username" });
    // this.setState({
    //   comments,
    //   input: "",
      
    // });
  };
  
    render() {
      return (
          <div className="dunno">
              
              <form onSubmit={this.loginSubmit}>
         <input 
         onChange={this.changeusername}
              className="userinput"
              type="text"
              
            //   placeholder={this.state.placeholder}
              value={this.state.username} 
                   />

              <input 
              onChange={this.changepassword}
              className="passwordinput"
              type="text"
            //   placeholder={this.state.placeholder}
              value={this.state.password}
                  />
                  <button onClick={this.loginSubmit}>Login</button>
                  </form>
          </div>
      );
    }
  }

  export default Login;