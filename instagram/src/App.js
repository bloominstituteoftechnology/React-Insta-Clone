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
  
        const obj = {
          task: this.state.task,
          id: Date.now(),
          completed: false,
          important:false,
        }
  
        this.setState({
          comments: [...this.state.todo, obj],
          task: "",
        });
    }


  render() {
    return (
      <div className="App">
      <SearchBar value={this.state.search} inputHandler={this.inputHandler} searchClickHandler={this.searchClickHandler}/>
      <PostContainer posts={this.state.posts}/>
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
