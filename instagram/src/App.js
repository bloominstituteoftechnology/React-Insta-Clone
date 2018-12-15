import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = { dummy: [],
    filteredUserName: ''}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ dummy: dummyData })
    }, 2000)
  }

  inputFilteredUserName = event => {
    this.setState({filteredUserName: event.target.value})
  }

  filterPost = event => {
    event.preventDefault();
    let userName = this.state.filteredUserName;
    console.log(userName)
    let dummyCopy = this.state.dummy.slice();
    let filteredPost = [];
    // console.log(dummyCopy[0].username)

    for (let i = 0; i < dummyCopy.length; i++) {
      if (dummyCopy[i].username === userName) {
        filteredPost.push(dummyCopy[i])
      }
    }
    this.setState({dummy: filteredPost});
    if(userName === ''){
      this.setState({dummy: dummyData});
    }

  }

  render() {
    return (
      <div className="App">
        <SearchBar filterPost={this.filterPost} inputFilteredUserName={this.inputFilteredUserName} />
        {this.state.dummy.length === 0 ? (
          <h1>Loading</h1>
        ) : (
            this.state.dummy.map(post => {
              return <PostContainer post={post} key={post.timestamp} />
            }))}
        <p>{this.state.example}</p>
      </div>
    );
  }
}

export default App;
