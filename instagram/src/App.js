import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state={
      posts:[]
    };
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  render() {
    return (
      <div className="app-container">
        <SearchBar/>
        <PostContainer data={this.state.posts}/>
      </div>
    )
  }
}

export default App;
