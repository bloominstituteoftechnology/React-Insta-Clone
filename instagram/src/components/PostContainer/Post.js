import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';
import Like from './like.svg';

import './postContainer.css';

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
                    alt="post thumbnail"
                    className="post-image"
                    />
                </div>
                <div onClick={this.incrementLike}>
                    <img src={Like} alt="heart" className="like-img" />
                </div>
                <h5>likes: {this.state.likes}</h5>
                <CommentSection comments={this.props.post.comments} />
            </div>
        );
    };

}

export default Post;