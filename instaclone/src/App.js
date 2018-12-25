import React, { Component } from 'react';

import './App.css';

import Authenticate from './Authentication/Authenticate'
import PostsPage from './Components/PostContainer/PostsPage';
class App extends Component {
  constructor(){
    super();
    this.state ={
    }
  }

  // when the component mounts  
  //I want to get the dummy data from the local storage
  componentDidMount(){
  }

  //only update local storage if the data has changed
  componentDidUpdate(){ 
  }

  //posts page passed into the higher order component
  /* which pattern is better?
  composing the higher order component here or inside of posts page? */
  AuthenticatedPostPage = Authenticate(PostsPage);

  render() {
    return (
      <div className="App">
       <this.AuthenticatedPostPage />
      </div>
    );
  }
}


export default App;
//do type check at the place you need to display