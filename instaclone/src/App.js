import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage.js';



class App extends Component {

  constructor() {
    super();
    this.state = {
      
    };
  };



  render() {
    return (
      <div className="app">
        <PostsPage />
      </div>
            );
            }
                                                      };
               
export default App;
