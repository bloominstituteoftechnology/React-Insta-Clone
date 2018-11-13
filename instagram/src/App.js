import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faHeart } from '@fortawesome/free-regular-svg-icons';

import dummyData from './dummy-data';
import logo from './logo.svg';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
// import CommentSection from './components/CommentSection/CommentSection';

import './App.css';
import Post from './components/PostContainer/Post';

// library.add(fab, faCheckSquare, faCoffee);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }

  iterate() {
    return (
      this.state.data.map(post => (
        <PostContainer key={post.username} />
    )))}

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <div>
          {/* {this.state.data.map( post => ( */}
            
            <PostContainer 
              data={this.state.data}
            />
          ))
          // }
        </div>
      </div>
    );
  }
}

export default App;
