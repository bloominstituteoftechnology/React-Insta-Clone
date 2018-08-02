import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostLikesSection from './PostLikesSection';
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
            <div className="post-border">
            <PostHeader 
            username={this.props.post.username}
            thumbnailUrl={this.props.post.thumbnailUrl}
            />
            <div className="post-image-wrapper">
           
            <img 
            src={this.props.post.imageUrl} 
            alt="post-content" 
            className="post-image" 
            />
            
            </div>

            <PostLikesSection 
            likes={this.state.likes}
            incrementLike={this.incrementLike}
            />

            <CommentSection 
            comments={this.props.post.comments} 
            />
        </div>
        )
    }
} 

export default Post;