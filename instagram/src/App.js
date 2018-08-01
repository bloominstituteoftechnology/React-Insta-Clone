import React, { Component } from 'react';
import './App.css';
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./components/authentication/Authenticate";

// ------ Outline -------:

//App
    //Main Header
        //Page Title
        //Search Field
        //Header Icons
    //Post Container
        //Header
            //Avatar
            //Post Title
        //Image
        //Comment Section
            //Post Icons
            //Loaded Comments
            //Add Comment


class App extends Component {

  constructor () {
    super();
    this.state = {
      username: ""
    };
  }
  
componentDidMount() {
  const user = localStorage.getItem("user");
  this.setState({ username: user });
}

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
