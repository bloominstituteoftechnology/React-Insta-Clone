import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: dummyData,
    }
  }
  componentDidMount() {
    // this.setState = {
    //   postData: dummyData,
    // }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="PostsContainer">
          {this.state.postData.map((post, i) => {
            return <PostContainer key={i} postData={post} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
