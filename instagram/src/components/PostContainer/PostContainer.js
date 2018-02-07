import React, { Component } from 'react';

const PostContainer = (props) => {
  console.log(props);
  return (
    <li>
      <div className="PostUsername">
        {props.username}
      </div>
    </li>
  )
}

export default PostContainer;