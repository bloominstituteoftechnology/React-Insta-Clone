import React, { Component } from 'react';


const PostHeader = props => {
  return(
    <div>
      {props.data}
    </div>
  )
};

const PostContainer = props => {
  return(
    <PostHeader />
  )
}



export default PostContainer;
