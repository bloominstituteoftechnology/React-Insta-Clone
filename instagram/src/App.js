import React, { Component } from 'react';
import './App.scss';

import dummyData from './dummy-data';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {

  constructor() {

    super();

    this.state = {

      data: []

    }

  }

  componentDidMount() {

    this.setState({data: dummyData});

  }

  render() {
    return (
      <div className='app'>

        <SearchBar />

        {this.state.data.map(data => <PostContainer key={data.imageUrl} data={data} />)}

      </div>
    );
  }
}

export default App;
