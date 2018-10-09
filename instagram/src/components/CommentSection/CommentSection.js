import React from 'react';
import PropTypes from "prop-types";
import './CommentSection.css';

class CommentSection extends React.Component {

    render() {
        return (
            <div className="comment">
                <p><span className="comment-username">{this.props.comment.username}</span> {this.props.comment.text}</p>
            </div>
        )
    }
}

CommentSection.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    }).isRequired
};

CommentSection.defaultProps = {
    post: {
        username: "username",
        thumbnailUrl: "https://virtual-strategy.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
        imageUrl: "http://wbomusic.com/image/cache/data/icon/No%20Image-1024x1024.png",
        likes: 0,
        timestame: Date.now(),
        comments: [],
    }
};

export default CommentSection;