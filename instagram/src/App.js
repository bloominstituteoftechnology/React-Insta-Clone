import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchHeader from './components/SearchBar/SearchHeader.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser, faComment } from '@fortawesome/free-regular-svg-icons';

library.add(faInstagram, faSearch, faBandcamp, faHeart, faUser, faComment);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      filteredPosts: [],
      filterTarget: ''
    }
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  filter = event => {
    this.handleInput(event);
    this.setState(prevState => {
      const filteredPosts = prevState.posts.filter(post => {
        console.log(post);
        return post.username.includes(prevState.filterTarget);
      });
      return { filteredPosts: filteredPosts };
      // this could be just { filteredPosts }
    });
  };

  render() {
    return (
      <div className="App">
        <SearchHeader           
          changeHandler={this.filter}
          filterTarget={this.state.filterTarget}
          />
        <PostContainer data={            
          this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts}/>
      </div>
    );
  }
}

export default App;
