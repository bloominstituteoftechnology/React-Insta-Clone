import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from "prop-types";

const PostContainer = props => {
    return (
        <div className="post-container">
            <div className="post-header">
                <div><img src={props.thumbnailUrl} alt="post logo"/></div>
                <div>{props.username}</div>
            </div>
            <div><img src={props.imageUrl} alt="post png"/></div>
            <div className="post-nav">
                <div>Image 1</div>
                <div>Image 2</div>
            </div>
            <div className="post-likes">{props.likes} likes</div>
            <div>{props.comments.map((comment, index) => {
                return (
                    <CommentSection
                        key={index}
                        username={comment.username}
                        text={comment.text}
                    />
                );
            })}
            </div>
            <div className="timestamp">{props.timestamp}</div>
        </div>
    );
};

PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    })
};

export default PostContainer;