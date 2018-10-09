import React from 'react';
import PostContainer from './PostContainer';
import './post.css';

let Posts = (props) => {
    return (
        <div className="posts">
            {props.dummyData.map((post, i) => <PostContainer key={i} post={post}/>)}
        </div>
    )
}

export default Posts;