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
      username: '',
    }
  }

  componentDidMount() {
      this.setState({ posts: dummyData });
      this.hydrateStateWithLocalStorage();
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

  hydrateStateWithLocalStorage() {
    // Iterate through all items in state
    for (let key in this.state) {
      // Check to see if the key exists in localStorage. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
  
        // Parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value })
        } catch (e) {
          this.setState({ [key]: value })
        }
      }
    }
  }

  render() {
    // const App = () => {
    //   return (
    //     <>
    //       <PostsPage search={this.searchTerm} posts={this.state.posts}/>
    //     </>
    //   )
    // }

    // const HOCApp = Authenticate(App);

    // return (
    //   <HOCApp />
    // )

    return (
      <div className="app-container">
        {/* <Authenticate /> */}
        <PostsPage search={this.searchTerm} posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
