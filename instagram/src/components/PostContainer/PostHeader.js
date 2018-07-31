import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostHeader = props => {
    return (
            <div className="posting-header"><img src={props.post.thumbnailUrl} className="thumbnail" width="30" alt="User thumbnail"/>
            {props.post.username}
            </div>
    );
}

PostHeader.propTypes = {
    post: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string
    })
};

export default PostHeader;
