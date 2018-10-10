import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostPage from './components/PostPage/PostPage';
import Authenticate from './components/Authenticate/Authenticate.js';

class App extends Component {

  //------------------------------------------------
  constructor(props) {
    super(...arguments);
    this.state = {
      posts: [],
      searchQuery: null
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({posts: dummyData});
    }, 200);
  }
  render() {
    let AuthPostPage = Authenticate(PostPage);
    return (
      <div className="instagram">
        <SearchBar onSubmit={this.search} />
        <AuthPostPage
          authorQuery={this.state.searchQuery}
          posts={this.state.posts}
        />
      </div>
    );
  }

  //------------------------------------------------
  search = (searchText) => {
    if(!searchText.length){ searchText = null;}
    this.setState({
      searchQuery: searchText
    });
  }
  login = () => {
    
  }
}

export default App;
