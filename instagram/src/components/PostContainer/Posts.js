import React from 'react';
import PostContainer from './PostContainer';
import './postcontainer.css';

let Posts = (props) => {
    return (
        <div className="posts">
            {props.postData.map((post, i) => <PostContainer key={i} post={post}/>)}
        </div>
    )
}

export default Posts;