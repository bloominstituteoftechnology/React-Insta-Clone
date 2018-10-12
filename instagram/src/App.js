import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostPage from './components/PostPage/PostPage';
import Authenticate from './components/Authenticate/Authenticate.js';

class App extends Component {

  //-- Lifecycle Methods----------------------------
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
      <div>
        <SearchBar onSubmit={this.search} />
        <AuthPostPage
          authorQuery={this.state.searchQuery}
          posts={this.state.posts}
        />
      </div>
    );
  }

  //-- Interaction Methods -------------------------
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
