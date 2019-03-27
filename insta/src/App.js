import React, { Component } from 'react';
// import SearchBar from './SearchBar';
import PostContainer from './components/PostContainer.js'
import data from './components/data';
import './App.css';
import SearchBar from './components/SearchBar.js';
// import CommentSection from './components/CommentSection.js';

class App extends Component {
  constructor () {
    super(); 
    this.state = {
   dummyData: []
  //  put data in state and set to var dummyData
  // 1.set up initial data in state obj
   };
  }

  componentDidMount = () => {
    this.setState ({dummyData: data})
  }
  // 2.then render (initial render first then fetch #3)
  // 3. run componentDidMount - fetch data from API
  updatePost = (event, commentText, postId) => {
    event.preventDefault()
    let postToUpdate = data.find (post => {
      // reference data variable not dummyData
      return post.id === postId
    }) 
    const newComment = {
      id: Date.now(),
      username: 'Pikachu',
      text: commentText
    }
    postToUpdate.comments.push(newComment)

    const index = data.indexOf(post => {return post.id === postId})

    data[index] = postToUpdate;
    this.setState (
      {
        dummy: data
      }
    )
    
    // console.log(postToUpdate)
    // console.log('inside updatePost', commentText)
    // console.log('postId is ', postId)
  }
  // get the post by id
  // get the comments 
  // add new comment
  // add new post to state

  render() {
    return (
      <div className="App">
      <SearchBar />
      {/* running a forLoop on dummyData */}
      {/* mapping over data from state and putting into userPost
      userPost then set to var passPost inside PostContainer*/}
      {this.state.dummyData.map((userPost) => {
        return(
          <div key={userPost.id}>
          <PostContainer 
          passPost={userPost} 
          updatePost={this.updatePost}
          />
          {/* // userPost is the argument can be named anything but should
          // be relative to project
          // this argument become prop */}
          </div>
          )
        })}
      </div>
    );
  }
}

export default App;
