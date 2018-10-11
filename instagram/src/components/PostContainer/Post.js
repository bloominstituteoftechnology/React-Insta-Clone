import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikePost from './LikePost';
import PostHeader from './PostHeader';


class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <PostHeader
                    username={this.props.post.username}
                    thumbnail={this.props.post.thumbnailUrl}
                />
                <div className="post-image-wrapper">
                    <img
                        alt="post pic"
                        className="post-image"
                        src={this.props.post.imageUrl}
                    />
                </div>
                <LikePost
                    increment={this.increment}
                    likes={this.props.likes}
                /> 
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
