import React, {Component, useState} from 'react';
import Proptypes from 'prop-types';
import Data from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      posts: [],
      filteredPosts: []      
    }
  }

  componentDidMount() {
    this.setState({posts: Data});
  }


  search(event) {
    let posts = this.state.posts.filter(post => {
      if(post.username.includes(event.target.value)) { return post; }
    });
    this.setState({filteredPosts: posts});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar 
            search={this.search}
            />
         <PostContainer
           posts={this.state.posts}
           addComment={this.addComment} // Need to figure out how to add comment to the appropriate username. 
           //One idea is to generate a unique id for each of the dummy data and use it to find the right post to add a comment too
           />
        </header>
      </div>
    );

  }
}

export default App;
