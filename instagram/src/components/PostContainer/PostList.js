import React from 'react';
import Post from './Post';

// import './PostContainer.css';



const PostList = props => {
    let posts = props.postData.map((post, index) => {
    return <Post key={index} postData={post} 
    inputComment={props.inputComment} 
    handleAddComment={props.handleAddComment} 
    handleChange={props.handleChange} username={props.username}/>; 
    });


  return (
    <React.Fragment>
        {posts}
    </React.Fragment>
  );
};

export default PostList;