import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import {dummyData} from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newComment: ""
    }
  }

  componentDidMount() {
    console.log('CDM is running', this.state.posts);
    // we will add any other data to state (async fetch calls)
    setTimeout(() => {
      this.setState({ posts: dummyData });
    }, 800);
  }

  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  

  createComment = event => {
    event.preventDefault();
    console.log('target name is', [event.target.name]);
    console.log('target value is', event.target.value);
    // let username = "bart"
    // const comments = this.state.posts.slice();
    // comments.push({username:username}, )
    // console.log(comments);
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <SearchBar/>
        <PostContainer updateInput={this.updateInput} posts={this.state.posts} createComment={this.createComment}/>
      </div>
    );
  }
}

export default App;
