import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      postComments: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  render() {
    return (
      <div className="App">
          <SearchBar />
          { this.state.data === 0 ? 
              ( <h2>Loading...</h2> ) : 
              ( <PostContainer data={this.state.data} /> ) 
          }
      </div>
    );
  }
}

export default App;
