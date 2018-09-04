import React from 'react';
import PostContainer from '../PostContainer/PostContainer.js';

const Timeline = props => {
    return (
        <div>
            {props.posts.map( post => <PostContainer key={post.imageUrl} post={post}/> )}
        </div>
    );
}

export default Timeline;