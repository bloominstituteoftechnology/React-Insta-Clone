import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import dummyData from './dummy-data';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  };

  componentWillMount() {
    this.setState({posts: dummyData})
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
