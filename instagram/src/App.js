import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile:[]
    };
  }

  componentDidMount() {
    this.setState({ profile: dummyData});
  }

  someFunction() {
    return false;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <PostContainer profile = {this.state.profile}>
          <CommentSection />
        </PostContainer>
      </div>
    );
  }
}

export default App;
