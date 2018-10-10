import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import usernames from './local-storage';
import PostsPage from './components/PostContainer/PostsPage.js';
import Authenticate from './components/Authentication/Authenticate.js';



class App extends Component {

  constructor(){
    super();
    this.state = {
      postData: [],
      usernames: usernames

    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({postData: dummyData, usernames: usernames});

    }, 500);

  }

  addComment = (commentObj, user) =>{
    console.log(commentObj);
    console.log(user);


    let newPostData = this.state.postData;
    console.log(newPostData);
    for(let i=0; i < newPostData.length; i++){
      if(newPostData[i].username === user){
        let newCommentList = newPostData[i].comments;
        newCommentList.push(commentObj);
      }
    }

    this.setState({
      postData: newPostData
    })
  }

  searchPosts = (searchText) =>{
    let newPostData = dummyData.filter(post =>{
      return (post.username.includes(searchText))
    })

    this.setState({
      postData: newPostData
    })
  }

  login = (username) =>{
    const newUserList = [...this.usernames, username];
    this.setState({
      usernames: newUserList
    })
  }

  render() {
    return (
      <div className="App">
        <PostsPage searchPosts={this.searchPosts} postData={this.state.postData} addComment={this.addComment} />
        {/* <SearchBar searchPosts={this.searchPosts}/>
        <PostListContainer postData={this.state.postData} addComment={this.addComment} /> */}
      </div>
    );
  }
}

export default Authenticate(App);
