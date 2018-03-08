import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import { SearchBar } from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Posts: [], 
    };
  }

  componentDidMount() {
    this.setState({
      Posts: dummyData,
    })
  }

  render() {
    //this.state.Posts.forEach(post => console.log(post));
    return (
      <div className="container">
        <SearchBar />
        {this.state.Posts.map((post, index) => <PostContainer key={index} post={post} />)}
      </div>
    );
  }
}

export default App;
