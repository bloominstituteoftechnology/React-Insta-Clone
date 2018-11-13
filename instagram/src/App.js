import React, { Component } from 'react';
import './less/App.less';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state ={
      posts: dummyData,
      commentInput: '',
      searchInput:'',
      username: 'cotikor'
    }
  }
  handleChange = event => {
    console.log(this.state.posts)
    this.setState({
      [event.target.name]: event.target.value
      
    });
  };
  
  handleSearch = event => {
    this.handleChange();
    this.setState({
      posts: this.state.posts.filter(post => {
        return post.username.includes(event.target.value)
      })
    })
  };

  addComment = event => {
    event.preventDefault();
    this.setState({
      posts: [
        ...this.state.posts,
        {comment: 
        { text: this.state.commentInput, username: this.state.username}
        }
      ],
      commentInput: ''
    });
  };
  
  render() {
    return (
      <div className="App">
       <SearchBar />

        <PostContainer 
        posts= {this.state.posts}
        AddComment={this.AddComment}
			  commentInput={this.state.commentInput}
			handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
