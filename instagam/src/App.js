import React, { Component } from 'react';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';
import dummyData from './dummy-data';
import PostsPage from './components/PostsPage';

function App() {
  return (
    <PostsPage />
  )
}


export default App;





// addComment =(url) => {
  //   // e.preventDefault();
  //   // console.log('e: ', e)
  //   console.log('url: ', url)
  //   // map over state - commentsData
  //   // if object.imgURL === url { push newObj into data.comments}
  //   // setState
  //   const newCommentsCopy=this.state.commentsData.slice();
  //   let slicedComment = newCommentsCopy.comments;
  //   console.log('slicedComment: ', typeof(slicedComment))
  
  //   const newComment = this.state.newPost;
  //   let arr; 
  //   let newObj={
  //       username: 'grej',
  //       text: newComment
  //   }
  //   // if(newCommentsCopy.imageUrl===url) {
  //   //   slicedComment.push(newObj);
  //   //   this.setState({ commentsData: newCommentsCopy, newPost: '' })
  //   // } null;
   
  //   newCommentsCopy.map(item => {
  //     if(url === item.imageUrl){
  //      arr = item.comments;
  //     arr.push(newObj);
  //     console.log('arr: ', arr)
  
  //       return arr;
        
  //   }  null;
  // })  
  // let newData= newCommentsCopy;
  // this.setState({ commentsData: newData, newPost: '' })
  
  // }