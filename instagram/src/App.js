import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCommentAlt, faEllipsisH, faCompass, faUser, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faHeart, faCommentAlt, faEllipsisH, faCompass, faUser, faCameraRetro);

class App extends Component {
  constructor () {
    super();

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ posts: dummyData });
    }, 500);
  }

  render() {
    if (!this.state.posts.length) {
      return <h4 className="app-container">⏰</h4>;
    }

    return (
      <div className="app-container">
        <SearchBar />
        {this.state.posts.map(post => (
          <div key={post.timestamp}>
              <PostContainer username={post.username}
                             thumbnail={post.thumbnailUrl}
                             image={post.imageUrl}
                             likes={post.likes}
                             timestamp={post.timestamp}
                             comments={post.comments} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
