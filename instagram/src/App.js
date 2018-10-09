import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import PropType from 'prop-types';


library.add(faHeart);
library.add(faUserCircle);

class App extends Component {
  render() {
    return (
      <div>
      <SearchBar />
      <div className="container">
        
        
        <PostContainer dummyData={dummyData} />
      </div>
      </div>
    );
  }
}

export default App;
