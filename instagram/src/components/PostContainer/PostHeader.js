import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostHeader = props => <div className="post-header">
                                <img src={props.thumbnail} className="thumbnail" alt="User Thumbnail" />
                                <strong>{props.username}</strong>
                            </div>

PostHeader.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}                            

export default PostHeader