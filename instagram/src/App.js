import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    let storedPosts = JSON.parse(localStorage.getItem('posts'));
    if(storedPosts) {this.setState({ data: storedPosts})}
    this.setState({
      data: dummyData,
    })
  }

  render() {
    
    return (
      <div className="App">
        <SearchBarContainer />
        <PostContainer 
          data={this.state.data}
          addComment={this.addComment}
        />
      </div>
    );
  }
}

export default App;
