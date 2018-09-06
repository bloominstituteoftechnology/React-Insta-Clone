import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: ""
      
  };
  }

  search = event => {
    event.preventDefault();
    let newPosts = [...this.state.posts];
    newPosts = newPosts.filter(post => {
      if (post.username === this.state.search) {
        return post;
      }
    });
    this.setState({ posts: newPosts });

  };

  handleChange = event => {
    // event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
     this.setState({posts: dummyData}); 
  }

  render() {
    return (
      <div className="App">
        
        <SearchBar search={this.search} handleChange={this.handleChange}/>
        <PostContainer posts={this.state.posts}/>

        

      </div>
    );
  }
}

export default App;
