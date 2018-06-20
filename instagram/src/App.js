import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      authenticate: Authenticate
    }
  }

  componentDidMount() {
    this.setState({dummyData: dummyData})
  }

  render() {
    return (
      <PostPage dummyData={this.state.dummyData} authenticate={this.state.authenticate}  />
      // <div className="App">
      //   <SearchBar />
       
      //   <div className="App-content">
      //     {this.state.dummyData.map(post => (
      //       <PostContainer key={post.timestamp} dummyData={post} />
      //     ))}
      //   </div>
      // </div>
    );
  }
}

export default App;
