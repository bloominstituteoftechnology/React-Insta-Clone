import React from 'react';
import Post from './Post';
import './Posts.css';

const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

export default PostsContainer;










/*
//import CommentSection from "./CommentSection.js";

//and iterate over said data, passing each individual
//object as a prop to an instance of PostContainer. (BELOW)
const PostContainer = props => {
    
let postArray = props.dummyData.map(item => {
        return {comments:item.comments,
        username:item.username,
      } 
    }   
    );
console.log(postArray)
//Each PostContainer component will then pass the array of 
//comments on each post object as a prop to an instance of
// the CommentSection component. (BELOW)
let commentsArray=[];
var i;
for (i =0; i<postArray.length; i++) {
    commentsArray.push(postArray[i].comments)
}

  //console.log(postArray[1].comments)
//let commentsArray = postArray.map(item => {
   //return postArray[item].comments
   //}   
//)
console.log(commentsArray)
return <div>
   {commentsArray}
   </div> 
 };

  
export default PostContainer;
  
  */