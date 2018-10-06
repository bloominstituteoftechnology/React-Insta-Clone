import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);
library.add(faComment);
library.add(faCompass);
library.add(faUser);
library.add(faSearch);



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }

  render() {
    return (
      <>
        <SearchBar />
        <PostContainer posts={this.state.data}/>
      </>
    );
  }
}

export default App;
