import React, { Component } from 'react';

import './App.css';

import Authenticate from './Authentication/Authenticate'
import PostsPage from './Components/PostContainer/PostsPage';

//posts page passed into the higher order component
/* which pattern is better?
composing the higher order component here or inside of posts page? */
const AuthenticatedPostPage = Authenticate(PostsPage);

class App extends Component {
  constructor(){
    super();
    this.state ={
      user: {}
    }
  }

  /*should the users information be on App or should it be on postsPage? */
  componentDidMount(){
    
  }

  

  render() {
    localStorage.clear()
    return (
      <div className="App">
       <AuthenticatedPostPage  />
      </div>
    );
  }
}


export default App;
//do type check at the place you need to display