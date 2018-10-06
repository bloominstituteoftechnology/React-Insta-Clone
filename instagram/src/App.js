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
      this.setState({ posts: dummyData });
  }

  searchTerm = (event) => {
    const query = event.target.value;
    const posts = [];

    this.state.posts.filter(post => {
      return post.username.includes(query) ? posts.push(post) : null;
    })

    // If blank...
    query === '' ? this.setState({ posts : dummyData }) : this.setState({ posts : posts });
  }

  render() {
    if (!this.state.posts.length) {
      return <h1 className="app-container">⏰ Loading... ⏰</h1>;
    }

    return (
      <div className="app-container">
        <SearchBar search={this.searchTerm} />
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
