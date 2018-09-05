import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import IGLogo from './assets/iglogo.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      inputText: '',
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    console.log('App render');
    console.log(this.increaseLikes);
    console.log('----------------');
    return (
      // console.log(this.state.dummyData),
      <div className="App">
        <div className="title-bar">
          <div className="logo">
            <i className="fab fa-instagram" />{' '}
            <img src={IGLogo} className="logo-image" />
          </div>
          <SearchBar />
          <div className="other-icons">
            <i className="far fa-compass" />
            <i className="far fa-heart" />
            <i className="far fa-user" />
          </div>
        </div>
        {this.state.posts.map((post, index) => (
          <PostContainer post={post} key={index} />
        ))}
      </div>
    );
  }
}

export default App;
