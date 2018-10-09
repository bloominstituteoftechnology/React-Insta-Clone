import React from 'react';
import PropTypes from "prop-types";
import './PostContainer.css';

import CommentForm from '../CommentSection/CommentForm';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {

    render() {
        return (
            <div className="post">
                <div className="post-header">
                    <img className="header-thumbnail" src={this.props.post.thumbnailUrl} alt="Thumbnail" />
                    <h2 className="header-username">{this.props.post.username}</h2>
                </div>
                <div className="post-content">
                    <img className="content-image" src={this.props.post.imageUrl} alt="Post" />
                    <p className="social-buttons">
                        <a><i class="far fa-heart"></i></a>
                        <a><i class="far fa-comment fa-flip-horizontal"></i></a>
                    </p>
                    <p className="likes-count">{this.props.post.likes} likes</p>
                </div>
                <div className="post-comments">
                    {this.props.post.comments.map(comment => (
                        <CommentSection comment={comment} />
                    ))}
                </div>
                <div className="post-timestamp">
                    <p>{this.props.post.timestamp}</p>
                </div>
                <div className="post-comment-form">
                    <CommentForm />
                </div>
            </div>
        )
    }
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    }).isRequired
};

export default PostContainer;