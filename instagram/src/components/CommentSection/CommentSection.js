import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faComment, faHeart} from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faComment, faHeart);

const CommentSection = props => {
    return (
        <div className="comment-section-container">
            <div className="post-interact-icons">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </div>
            <div className="post-likes">
                <p>{props.post.likes} likes</p>
            </div>
            <div className="post-comments">
                {/* {props.post.comments.map( */}
                    {/* comment => (  */}
                        <Comment 
                            key={props.username}
                            comment={props}
                        />
                    {/* ) */}
                {/* )}  */}
            </div>
            <div className="post-comment-input">
                <input type="text" placeholder="Add a comment..." />
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