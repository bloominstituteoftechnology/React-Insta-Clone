import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    this.setState({
      posts: dummyData
    });
  }

  addNewComment = (comment, index)=>{
    const data = this.state.posts;
    // Add hard coded user
    const commentObj = {
      username: "soda_popinski",
      text: comment
    }
    data[index].comments.push(commentObj);
    this.setState({
      posts: data
    });
  }

  addLike = (index)=>{
    const data = this.state.posts;
    data[index].likes++;
    this.setState({
      posts: data
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        {this.state.posts.map((post, index)=>{
          return(
            <div key={post.timestamp} className="containers">
              <PostContainer index={index} post={post} addLike={this.addLike} addNewComment={this.addNewComment}/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
