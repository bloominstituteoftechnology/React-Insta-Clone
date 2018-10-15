import React, { Component } from 'react';
import './App.css';
import Search from './components/SearchBar/components/Search';
import Container from './components/PostContainer/components/Container';
import Comments from './components/CommentSection/components/Comments';

import './components/SearchBar/components/search.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <Search />
        <Container />
        <Comments />
      </div>
    );
  }
}

export default App;
