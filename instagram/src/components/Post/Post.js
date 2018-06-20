import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './Post.css';
import PropTypes from 'prop-types';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    };

    render() {
        return (
            <div className="post-container">
                <div className="post-header">
                    <div><img src={this.props.post.thumbnailUrl} /></div>
                    <div>{this.props.post.username}</div>
                </div>
                <div className="post-image">
                    <img src={this.props.post.imageUrl} />
                </div>
                <div className="post-nav">
                    <div><i className="far fa-heart"></i></div>
                    <div><i className="far fa-comment"></i></div>
                </div>
                <div>
                    {this.props.post.likes}
                </div>
                <CommentSection
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments}
                />
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default Post;