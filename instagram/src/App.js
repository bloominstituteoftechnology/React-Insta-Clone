import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
class App extends Component {
  
  constructor() {
    super();

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({posts: dummyData});
    }, 3000)
  }
  render() {
    return (
      <div className="App">
        <nav className="container">
          <SearchBar />
        </nav>
        <div className="body-wrapper">
          { this.state.posts.length === 0 ? (
            <div> Loading ...</div>
            ) : (
              <div>
              <PostContainer posts={this.state.posts} />

              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
