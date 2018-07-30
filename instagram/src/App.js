import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class App extends Component {
  constructor() {
    super();
    this.state = {data: dummyData};
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(item => <PostContainer post={item} />)}
      </div>
    );
  }
}

export default App;
