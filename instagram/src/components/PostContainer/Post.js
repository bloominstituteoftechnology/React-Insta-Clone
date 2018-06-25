import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
    return 
    <div className="post-content">
    <img className='post-thumb' src={props.post.thumbnailUrl}/>
    {props.post.username}
    <img className='post-full' src={props.post.imageUrl}/>
    </div>
};

export default Post;

Post.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageURL: PropTypes.string,
    likes: PropTypes.number
};