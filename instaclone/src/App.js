import React, { Component } from 'react';

import './App.css';
import myStorage from './Storage'

import Authenticate from './Authentication/Authenticate'
import PostsPage from './Components/PostContainer/PostsPage';
import Login from './Components/Login/Login'
class App extends Component {
  constructor(){
    super();
    this.state ={
      user: ""
    }
  }

  // when the component mounts  
  //I want to get the dummy data from the local storage
  componentDidMount(){
  }

  //only update local storage if the data has changed
  componentDidUpdate(){ 
  }

  login(username, password){ 
    myStorage.setObject('user', {username:username});
    console.log(' username',myStorage.getObject('user'));
  }



  //posts page passed into the higher order component
  /* which pattern is better?
  composing the higher order component here or inside of posts page? */
  AuthenticatedPostPage = Authenticate(PostsPage);

  render() {
    return (
      <div className="App">
       {/* <this.AuthenticatedPostPage /> */}
       <Login login={this.login} />
      </div>
    );
  }
}


export default App;
//do type check at the place you need to display