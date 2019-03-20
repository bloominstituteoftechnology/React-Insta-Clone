import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      search: ''
    }
  }

  componentDidMount(){
    this.setState({
      posts: dummyData
    })
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;