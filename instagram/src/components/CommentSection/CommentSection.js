import React, { Component } from 'react';
import Comment from './Comment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faHeart } from '@fortawesome/free-regular-svg-icons';

const CommentSection = props => {
    return (
        <div className="comment-section-container">
            <div className="post-interact-icons">

            </div>
            <div className="post-likes">
                {/* Works */}
                <p>{props.post.likes} Likes</p>
            </div>
            <div className="post-comments">
                {props.post.comments.map(
                    comment => (
                        <Comment 
                            key={comment.username}
                            comment={comment}
                        />
                    )
                )}
            </div>
            <div className="post-comment-input">
                <input type="text" placeholder="Add a comment..." />
            </div>
        </div>
    )
};

export default CommentSection;