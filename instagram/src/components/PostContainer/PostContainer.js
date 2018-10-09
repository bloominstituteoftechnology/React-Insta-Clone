import React from 'react';
import Comment from './Comment.js';
import './PostContainer.css';

class PostContainer extends React.Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            comments: props.comments
        };
    }
    render() {
        /*
            key={post.username + post.timestamp}
            username={post.username}
            thumbnailUrl={post.thumbnailUrl}
            imageUrl={post.imageUrl}
            likes={post.likes}
            timestamp={post.timestamp}
            comments={post.comments}
        */
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
                    <img src={this.props.imageUrl} />
                </div>
                <div className="post-interaction">
                    <img src="img/interact-like.png" alt="like button" />
                    <img src="img/interact-comment.png" alt="comment button" />
                    <div className="post-likes-count">{this.props.likes} likes</div>
                </div>
                <div className="post-comments">
                    {
                        this.state.comments.map(comment => (
                            <Comment username={comment.username}>
                                {comment.text}
                            </Comment>
                        ))
                    }
                </div>
                <div className="post-time">{this.props.timestamp}</div>
                <div className="post-add-comment">
                    <a>Add a comment...</a>
                    <span className="post-unknown-dots">...</span>
                </div>
            </div>
        )
    }
}

export default PostContainer;
