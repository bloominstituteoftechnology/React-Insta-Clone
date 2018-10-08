import React from 'react';

const PostActions = () => {
    return (
        <div className="post-actions">
            <div className="action-icons">
                <span className="action-icon sprite heart"></span>
                <span className="action-icon sprite comment-icon"></span>
                <span className="action-icon sprite share"></span>
            </div>
            <div className="action-icon sprite bookmark"></div>
        </div>
    );
}

export default PostActions;
