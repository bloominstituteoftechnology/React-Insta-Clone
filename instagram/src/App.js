import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentSection from './Components/CommentSection/CommentSection';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myData: []
    }
  }

  componentDidMount() {
    this.setState({ myData: dummyData });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <CommentSection />
        <PostContainer />

      </div>

    );
  }
}

export default App;
