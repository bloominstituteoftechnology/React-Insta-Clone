import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data.js';

class App extends Component {
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
    return (
      <div className="instagram">
        <SearchBar onSubmit={this.search} />
        {
          this.renderFilterSearch(this.state.posts).map(post => (
            <PostContainer
              key={post.username + post.timestamp}
              username={post.username}
              thumbnailUrl={post.thumbnailUrl}
              imageUrl={post.imageUrl}
              likes={post.likes}
              timestamp={post.timestamp}
              comments={post.comments}
            />
          ))
        }
      </div>
    );
  }
  renderFilterSearch(postArray) {
    return postArray.filter(post => {
      if(!this.state.searchQuery){ return true;}
      return (post.username === this.state.searchQuery);
    })
  }

  //----------------------------------------------
  search = (searchText) => {
    if(!searchText.length){ searchText = null;}
    this.setState({
      searchQuery: searchText
    });
  }
}

export default App;
