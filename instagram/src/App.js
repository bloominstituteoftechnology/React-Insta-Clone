import React, { Component } from 'react';
import './App.scss';

import dummyData from './dummy-data';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {

  constructor() {

    super();

  }

  render() {
    return (
      <div className='app'>

        <SearchBar />

        {dummyData.map(data => <PostContainer data={data} />)}

      </div>
    );
  }
}

export default App;
