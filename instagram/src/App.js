import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostListContainer from './components/PostListContainer/PostListContainer.js';
import PostsPage from './components/PostContainer/PostsPage.js';


class App extends Component {

  constructor(){
    super();
    this.state = {
      postData: []

    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({postData: dummyData});

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

  render() {
    return (
      <div className="App">
        <PostsPage />
        <SearchBar searchPosts={this.searchPosts}/>
        <PostListContainer postData={this.state.postData} addComment={this.addComment} />
      </div>
    );
  }
}

export default App;
