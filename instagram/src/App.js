import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postInfo: [],
      search: ""
    };
  }

  search = event => {
    event.preventDefault();
    let additionalPosts = [...this.state.postInfo];
    additionalPosts = additionalPosts.filter(post => {
      if(post.username === this.state.search) {
        return post;
      }
    })
    this.setState({postInfo: additionalPosts})
  }

  handleChanging = event => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  }

  componentDidMount() {
    this.mapData();
  }

  mapData() {
    this.setState({ postInfo: [...dummyData] });
  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <PostContainer 
          posts = {this.state.postInfo} 
        />
      </div>
    );
  }
}

export default App;