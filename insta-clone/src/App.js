import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'
import Data from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      commentData: [
        {username: 'senior_one_more'},
        {text: ''}
      ]
    }
  }

  componentDidMount() {
    this.setState({
      data: Data
    })
  }

  render() {
    return (
      <div className="App">
        {/* <SearchBar /> */}
        <PostContainer data={this.state.data} commentdata={this.state.commentData}/>
      </div>
    );
  }
}

export default App;
