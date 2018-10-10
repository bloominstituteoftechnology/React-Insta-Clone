import React, { Component } from 'react';
import dummyData from './dummy-data';
import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostsPage';
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
    const App = () => {
      return (
        <>
          {/* FIXME: search is no longer working as expected. */}
          <PostsPage {...this.state} search={this.searchTerm} />
        </>
      )
    }

    const HOCApp = Authenticate(App);

    return (
      <HOCApp />
    )
  }
}

export default App;