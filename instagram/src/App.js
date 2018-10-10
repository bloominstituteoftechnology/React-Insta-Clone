import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import data from './dummy-data';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      commentInput: ''
    }
  }

  componentDidMount() {
    this.setState({data: data})
  }

  commentInputHandler = (event) => {
    this.setState({commentInput: event.target.value})
  }

  addNewComment = (event) => {
    event.preventDefault();
    let currentData = this.state.data;
    const newData = currentData.map(post => {
      if (event.target.id === post.timestamp) {
        return {
          ...post, 
          comments: [...post.comments, 
            {username: 'Brandon', text: this.state.commentInput}]};
      } else {
        return post;
      }
    })

    this.setState({
      data: newData,
      commentInput: ''
    })
  }

  incrementLikes = event => {
    event.preventDefault();
    let currentData = this.state.data;
    const newData = currentData.map(post => {
      if (event.target.id === post.timestamp) {
        return {...post, likes: post.likes + 1}
      } else {
        return post;
      }
    })

    this.setState({
      data: newData
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => {
          return <div className='post' key={post.timestamp}>
            <PostContainer postData={post} 
                          addNewComment={this.addNewComment} 
                          commentInput={this.state.commentInput}
                          commentInputHandler={this.commentInputHandler}
                          incrementLikes={this.incrementLikes}/>
          </div>
        })}
      </div>
    );
  }
}

App.propTypes = {
  postData: PropTypes.object
}

export default App;
