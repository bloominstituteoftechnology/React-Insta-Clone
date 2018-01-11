import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data';
import CommentSection from './components/CommentSection/CommentSection'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    }
  }
  
  componentDidMount = () => {
    this.setState({
      dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="posts">
          <PostContainer data={this.state.dummyData} />
          <CommentSection data={this.state.dummyData} />
        </div>
      </div>
    );
  }
}

export default App;
