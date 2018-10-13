import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'
import CommentSection from './components/CommentSection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
           <div className = 'SearchBar'>
           <SearchBar />
           </div> 
           
           <div className = 'PostContainer'> 
           <PostContainer />
           </div>
           
           <div className = 'CommentSection'>
           <CommentSection />
           </div> 

          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
