import React, { Component } from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import PropTypes from 'prop-types';
import './CommentSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { throws } from 'assert';

library.add(fab, faComment, faHeart);

const CommentSection = props => {
    return (
        <div className="comment-section-container">
            <div className="post-interact-icons">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </div>
            <div className="post-likes">
                <p>{props.post.post.likes} likes</p>
            </div>
            <div className="post-comments">
                {props.post.post.comments.map( 
                    comment => {
                        // console.log('CommentSection.js', comment.username);
                        return (
                        <Comment 
                            key={comment.username}
                            comment={comment}
                        />
                        )
                    }
                    ) 
                }
            </div>
            <div className="post-comment-input">
                <CommentInput
                    text={props.text}
                    addComment={props.addComment}
                    handleChange={props.handleChange}
                />
            </div>
        </div>
    )
};


CommentSection.propTypes = {
    username: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;