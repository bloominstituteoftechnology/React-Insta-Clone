import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';

class PostContainer extends React.Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            comments: props.comments
        };
    }
    render() {
        return (
            <div className="post-container">
                <div className="post-header">
                    <img
                        src={this.props.thumbnailUrl}
                        alt={this.props.username+' profile'}
                    />
                    <a
                        className={this.props.username}
                        href={'https://example.com/users/'+this.props.username}
                    >
                        {this.props.username}
                    </a>
                </div>
                <div className="post-photo">
                    <img src={this.props.imageUrl} alt="This should be provided as data from the API" />
                </div>
                <div className="post-interaction">
                    <img src="img/interact-like.png" alt="like button" />
                    <img src="img/interact-comment.png" alt="comment button" />
                    <div className="post-likes-count">{this.props.likes} likes</div>
                </div>
                <CommentSection
                    lastActivity={this.props.timestamp}
                    comments={this.state.comments}
                />
            </div>
        )
    }
}

export default PostContainer;
