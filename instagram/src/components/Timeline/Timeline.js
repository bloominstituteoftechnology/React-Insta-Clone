import React from 'react';
import PostContainer from '../PostContainer/PostContainer.js';
import './Timeline.css';

const Timeline = props => {
    return (
        <div className='timeline-container'>
            {props.posts.map( post => <PostContainer key={post.imageUrl} post={post}/> )}
        </div>
    );
}

export default Timeline;