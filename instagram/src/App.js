import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import SearchComponent from './components/SearchBar/SearchComponent';
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <SearchComponent />
        <PostContainer data={this.state.data}/>
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.array,
}

export default App;
