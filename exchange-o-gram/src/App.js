import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
    }

    window.onbeforeunload = this.saveData;
  }

  saveData = ()=>{
    localStorage.setItem("exchange_o_gram", JSON.stringify(this.state.posts));
  }

  componentDidMount(){
    const loadedData = JSON.parse(localStorage.getItem("exchange_o_gram"));
    
    let data;
    if(loadedData === null || loadedData.length === 0){
      data = dummyData;
    }

    else{
      data = loadedData;
    }

    // On first run and refresh show all containers
    data.forEach(obj=>{
      obj.isHidden = false;
    })

    this.setState({
      posts: data
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

  searchPosts = (username)=>{
    const data = this.state.posts;
    data.forEach(obj=>{
      if(obj.username === username || username === 'all'){
        obj.isHidden = false;
      }
      else{
        obj.isHidden = true;
      }
    });
    this.setState({
      posts: data
    });
  }

  deleteComment = (postIndex, commentIndex)=>{
    const data = this.state.posts;
    data[postIndex].comments.splice(commentIndex, 1);
    this.setState({
      posts: data
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchPosts}/>
        <PostsPage posts={this.state.posts} addNewComment={this.addNewComment} addLike={this.addLike} searchPosts={this.searchPosts} deleteComment={this.deleteComment}/>
      </div>
    );
  }
}

export default App;
