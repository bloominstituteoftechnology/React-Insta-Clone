import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage.js';
import Authenticate from './components/Authentication/Authenticate.js';



class App extends Component {

  constructor(){
    super();
    this.state = {
      postData: [],

    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({postData: dummyData});

    }, 500);

  }

  addComment = (commentObj, user) =>{



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
