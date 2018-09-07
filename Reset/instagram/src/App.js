import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';
// import PostsPage from './components/PostsContainer/PostsPage';
// import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostsContainer/PostsPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({posts: dummyData

    });
  };

// loggedIn = event => {
//   event.preventDefault();
//   let loggedIn = localStorage.getItem('Joseph', 'sentientrobosally');
  
// };

  render() {

    // console.log(this.state.posts);
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.posts} />
        {/* <PostsPage /> */}
        {/* <Authenticate loggedIn = {this.loggedIn} /> */}
      </div>
    );
  }
}

  export default App;