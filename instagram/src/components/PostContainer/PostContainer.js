import React from 'react';
import PropTypes from "prop-types";
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {

    handleLike = event => {
        event.preventDefault();
        this.props.addLike(this.props.postKey);
    }

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
                        <a onClick={this.handleLike}><i className="far fa-heart"></i></a>
                        <a><i className="far fa-comment fa-flip-horizontal"></i></a>
                    </p>
                    <p className="likes-count">{this.props.post.likes} likes</p>
                </div>
                <CommentSection 
                    postKey={this.props.postKey} 
                    timestamp={this.props.post.timestamp} 
                    addNewComment={this.props.addNewComment} 
                    comments={this.props.post.comments} />
            </div>
        )
    }
}

PostContainer.propTypes = {
    postKey: PropTypes.number.isRequired,
    post: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    }).isRequired,
    addNewComment: PropTypes.func,
};

PostContainer.defaultProps = {
    postKey: 0,
    post: {
        username: "username",
        thumbnailUrl: "https://virtual-strategy.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
        imageUrl: "http://wbomusic.com/image/cache/data/icon/No%20Image-1024x1024.png",
        likes: 0,
        timestame: Date.now(),
        comments: [],
    }
};

export default PostContainer;