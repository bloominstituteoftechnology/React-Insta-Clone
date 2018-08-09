import React, { Component } from "react";
import "./App.css";
// import PropTypes from "prop-types";
import dummyData from "./dummy-data";
import PostsPage from "./PostContainer/PostsPage";
import Authenticate from './Authentication/Authentication';
import Login from './Login/Login';
import SearchBar from "./SearchBar/SearchBar";



console.log(dummyData);

// const  = Authenticate(SearchBar);


class App extends Component {
  constructor(){
    super();
    this.state= {
      username: "",
      password: "",
      credentials: localStorage.getItem("creditionals")
    }
  };


  handleCreds = credentials => {
    if (!credentials) localStorage.removeItem("creditionals");
    this.setState({credentials})
  };


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    const authKey = `${this.state.username} logged in`;
    localStorage.setItem("credentials", authKey);
    this.setState({username: "", password: ""});

  };




  render() {
    return (
      <div className="App">
        
        {/* <HOCAuthSearch /> */}
        <PostsPage /> 
      </div>
    );
  }
}

export default App;





// handleChange = event => {
//   this.setStatew({[event.target.name]: event.target.value})
// }

// handleSubmit = event => {
//   event.preventDefault();
//   const authKey = `username: ${this.state.username} `
//   localStorage.setItem("credentials", `${this.state} and ${this.state.password}`)
// }
