import React, { Component } from 'react';
import PostContainerList from './components/PostContainer/PostContainerList';
import Header from './components/Header/Header';
import dummyData from './components/dummy-data';
import './Style.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      newComment: '',
      searchText: ''
    };
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }

  handleChange = e => {
    let newKeyValue = e.target.value;
    this.setState({
      [e.target.name]: newKeyValue
    });
  }

  getSelectedPost = (state, selectedPostUsr) => {
    let postFound = {};
    state.data.forEach(post => {
      if (post.username === selectedPostUsr){
        postFound = post;
      }
    });
    return postFound;
  }

  addNewComment = (event, postUsr, cmtUsr, dateTime) => {
    event.preventDefault();
    
    let selectedPost = this.getSelectedPost(this.state, postUsr);
    if (selectedPost === undefined || selectedPost === null){
      console.error("Post Username Not Found");
    } else {
      let newComment = {
        username: cmtUsr,
        timestamp: dateTime,
        text: this.state.newComment
      }
      selectedPost.comments.push(newComment);
  
      let newData = this.state.data.map(post => {
        if (post.username === selectedPost.username){
          return selectedPost;
        } else {
          return post;
        }
      });
  
      this.setState({
        data: newData,
        newComment: '',
        ...this.state.searchText
      });
      event.target.querySelector('textarea').value = '';
    }
  };

  incrementLikes = (event, postUsr) => {
    event.preventDefault();

    let selectedPost = this.getSelectedPost(this.state, postUsr);
    if (selectedPost === undefined || selectedPost === null){
      console.error("Post Username Not Found");
    } else {
      let newData = this.state.data.map(post => {
        if (post.username === selectedPost.username){
          selectedPost.likes = selectedPost.likes + 1;
          return selectedPost;

        } else {
          return post;
        }
      });
  
      this.setState({
        data: newData,
        ...this.state.newComment,
        ...this.state.searchText
      });
    }
  }

  setSearchResults = e => {
    e.preventDefault();
    const postsFound = dummyData.filter(post => post.username.includes(e.target.value));
    this.setState({
      data: postsFound
    })
  }

  render() {
    return (
      <div className="App">
        <Header setSearchResults={this.setSearchResults} />
        <div className="app-container">
          <PostContainerList
          data={this.state.data}
          addNewComment={this.addNewComment}
          handleChange={this.handleChange}
          incrementLikes={this.incrementLikes}
          />
        </div>
      </div>
    );
  }
}

export default App;
