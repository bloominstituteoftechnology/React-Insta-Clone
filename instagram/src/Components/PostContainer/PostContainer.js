import React from 'react';
import './PostStyling.css';
import Post from './Post';




const PostContainer = props => {
    return (
     <div className="posts-container-wrapper">
       {props.posts.map(p => <Post post={p} /> )};
     </div>
    );
};

export default PostContainer;