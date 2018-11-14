import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './Authentication/Authenticate';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: '',
      commentText: '',
      postId: 0
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
    })
  }

  handleSearch = ev => {
    this.setState({
      searchText: ev.target.value,
    });
  };

  handleComment = ev => {
    this.setState({
      commentText: ev.target.value,
      postId: ev.target.id
    });
  };

  addComment = ev => {
    ev.preventDefault();
    let metaData = this.state.data;
    metaData[this.state.postId].comments.push({username: 'tommaay', text: this.state.commentText})
    this.setState({
      data: metaData,
      commentText: ''
    })
  }

  render() {
    return (
      <div className="App">
        <PostsPage 
          handleSearch={this.handleSearch}
          searchText={this.state.searchText} 
          postsData={this.state.data}
          commentText={this.state.commentText} 
          handleComment={this.handleComment}
          addComment={this.addComment}
        />
        
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}

export default Authenticate(App);
