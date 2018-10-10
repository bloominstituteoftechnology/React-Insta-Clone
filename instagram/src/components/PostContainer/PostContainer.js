import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';

class PostContainer extends React.Component {
    constructor(props) {
        super(...arguments);
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
                    <img src={this.props.imageUrl} alt="Alt text should be provided by the API" />
                </div>
                <CommentSection
                    lastActivity={this.props.timestamp}
                    comments={this.props.comments}
                    likes={this.props.likes}
                />
            </div>
        )
    }
}

export default PostContainer;
