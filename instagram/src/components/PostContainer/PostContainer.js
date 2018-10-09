import React from 'react'
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {

    render() {
        return (
            <div className="post">
                <div className="post-header">
                    <img className="header-thumbnail" src={this.props.post.thumbnailUrl} alt="Thumbnail" />
                    <h2 className="header-username">{this.props.post.username}</h2>
                </div>
                <div className="post-content">
                    <img className="content-image" src={this.props.post.imageUrl} alt="Post" />
                    <p>{this.props.post.likes} likes</p>
                </div>
                <div className="post-comments">
                    {this.props.post.comments.map(comment => (
                        <CommentSection comment={comment} />
                    ))}
                </div>
            </div>
        )
    }
}

export default PostContainer;