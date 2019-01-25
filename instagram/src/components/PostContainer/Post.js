import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './Post.css';

class Post extends Component {
    render() {
        return (
            <div className='post-container'>
                <div className='post-header'>
                    <img src={this.props.post.thumbnailUrl} alt='' />
                    <div className='username'>{this.props.post.username}</div>
                </div>
                <img src={this.props.post.imageUrl} alt='' className='post-image' />
                <CommentSection
                    comments={this.props.post.comments}
                    post={this.props.post}
                    dummyData={this.props.dummyData}
                />
            </div>
        );
    }
}

Post.propTypes = {
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string,
                })
            ).isRequired
        })
    ).isRequired
};

export default Post;