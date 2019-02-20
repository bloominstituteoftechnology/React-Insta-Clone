import React, { Component } from 'react';
import PostPage from "./components/PostPage"
import authenticate from "./autentification/authenticate"
import login from "./login/Login"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loggedIn : true,
      display : " "
    }
  }


  render(){
    return (
      <div>
     
        <authenticate />
        <PostPage />
        <login />

        
      </div>
    )
  }
}

export default App