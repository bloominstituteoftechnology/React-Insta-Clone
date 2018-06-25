import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostContainer = props => {
    return (
        <div className="post-container">{props.dummyData.map(post => (
        <Post key={post.timestamp} post={post} />
    ))}
         </div>
    );
};

export default PostContainer;

  {/* <img className='post-thumb' src={props.post.thumbnailUrl}/>
        <p>{props.post.username}</p>
        <img className='post-full' src={props.post.imageUrl}/> */}