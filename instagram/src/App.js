import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dummyData: [],
    }
    console.log(dummyData);
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData})
  }

  render() {

    return (
      <div className="App">
        <SearchBar />
        <PostContainer 
          dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;
