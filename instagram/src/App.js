import React, { Component } from 'react';
import './App.css';
import PostsPage from "./components/PostContainer/PostsPage";
// Outline:

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
  
  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
