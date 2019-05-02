import React from 'react';
import Post from './Post'; 

const PostContainer = props => {
  return (
    <div className="postContainer">
        {props.posts.map((post) => (
            <Post post={post} commentName={props.usernameLogin} />
        ))}
    </div>
  );
};

export default PostContainer; 

