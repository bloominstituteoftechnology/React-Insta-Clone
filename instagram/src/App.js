import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage.js';
import dummyData from './dummy-data.js';
import Authenticate from './Authentication/Authenticate.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: dummyData });
    }, 500)
  }

  searchFilter = (event) => {
    event.preventDefault();
    console.log(event.target.vaule);
    this.setState({
      data: this.state.data.filter(post => {
        return {
          username: event.target.vaule,
          tuhmbnailURL: post.tuhmbnailURL,
          imageURL: post.imageURL,
          likes: post.likes,
          timestamp: post.timestamp,
          comments: post.comments,
        }
      })
    })
  }

  render() {

    return (
      <div className="App">
        <PostsPage dummyData={this.state.data} search={this.searchFilter} />
        <Authenticate />
      </div >
    );
  }
}

export default App;
