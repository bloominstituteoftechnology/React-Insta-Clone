import React, { Component } from 'react';
import './App.css';
import PostContainer from './PostContainer';
import dummyData from './dummy-data'
import SearchBar from './SearchBar'
import PropTypes from "prop-types"

class App extends Component {

  constructor() {
    super();
    this.state = {
      posts:[],
      search:'',
    } 
  }

  componentDidMount() {
    this.setState({posts: dummyData}) 

    }

  inputHandler = event => {
    const value = event.target.value;

    this.setState (
      {search:value}
    );
    }




    submitHandler = event => {
      event.preventDefault();
          const timestamp = event.target.getAttribute('data-id');

          const posts=this.state.posts.map(post => {
            if (timestamp===post.timestamp) {
              return {...post, likes: post.likes + 1};
            }
          
            else {return post;}
          })
      
  
        this.setState({
            posts: posts,
        });
    }


  render() {
    return (
      <div className="App">
      <SearchBar value={this.state.search} inputHandler={this.inputHandler} searchClickHandler={this.searchClickHandler}/>
      <PostContainer posts={this.state.posts} submitHandler={this.submitHandler}/>
      </div>
    );
  }
}

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageURL: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
        text: PropTypes.string,
        }
      ))
    }))
}

export default App;
