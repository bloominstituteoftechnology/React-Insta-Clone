import React from 'react';
import PropTypes from 'prop-types';

const PostActions = ({likePost, postLiked=false}) => {
    return (
        <div className="post-actions">
            <div className="action-icons">
                {
                    postLiked
                    ?<span onClick={likePost} className="action-icon sprite heart-fill"></span>
                    :<span onClick={likePost} className="action-icon sprite heart"></span>
                }
                <span className="action-icon sprite comment-icon"></span>
                <span className="action-icon sprite share"></span>
            </div>
            <div className="action-icon sprite bookmark"></div>
        </div>
    );
}

PostActions.propTypes = {
    likePost: PropTypes.func,
    postLiked: PropTypes.bool,
}

export default PostActions;
