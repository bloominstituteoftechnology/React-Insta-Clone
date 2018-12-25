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
      user: {}
    }
  }

  /*should the users information be on App or should it be on postsPage? */
  componentDidMount(){
    if(myStorage.getObject('user'))
      this.setState({user:myStorage.getObject('user')})
  }

  // updates local storage with the username and also sets the state of apps this.state.user
  login = (username, password) => { 
    myStorage.setObject('user', {username:username});
    this.setState({user:  myStorage.getObject('user').username})
  }

  //posts page passed into the higher order component
  /* which pattern is better?
  composing the higher order component here or inside of posts page? */
  AuthenticatedPostPage = Authenticate(PostsPage,Login);

  render() {
    // localStorage.clear()
    return (
      <div className="App">
       <this.AuthenticatedPostPage 
       {...this.state}
       login={this.login} />
      </div>
    );
  }
}


export default App;
//do type check at the place you need to display