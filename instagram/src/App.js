import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchHeader from './components/SearchBar/SearchHeader.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

library.add(faInstagram, faSearch, faBandcamp, faHeart, faUser);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchHeader />
        <PostContainer dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;
