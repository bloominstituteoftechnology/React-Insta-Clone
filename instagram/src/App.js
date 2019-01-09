import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostsPage from './components/PostContainer/PostsPage.js';
import Authenticate from './components/Authentication/Authenticate.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummy: [],
      filteredUserName: ''
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ dummy: dummyData })
    }, 2000)
  }

  inputFilteredUserName = event => {
    this.setState({ filteredUserName: event.target.value })
  }

  filterPost = event => {
    event.preventDefault();
    let userName = this.state.filteredUserName;
    let dummyCopy = this.state.dummy.slice();

    const filteredPost = dummyCopy.filter(post => {
      if (post.username === userName) {
        return true;
      }
    })
    this.setState({ dummy: filteredPost })

    if (userName === '') {
      this.setState({ dummy: dummyData });
    }

  }

  render() {
    return (
      <div className="App">
        <PostsPage filterPost={this.filterPost}
          inputFilteredUserName={this.inputFilteredUserName}
          dummy={this.state.dummy} />
          {/* <AuthenticateApp /> */}
        {/* <SearchBar filterPost={this.filterPost} inputFilteredUserName={this.inputFilteredUserName} />
        {this.state.dummy.length === 0 ? (
          <h1>Loading</h1>
        ) : (
            this.state.dummy.map(post => {
              return <PostContainer post={post} key={post.timestamp} />
            }))} */}
      </div>
    );
  }
}

// const AuthenticateApp = Authenticate(App);

export default App;
