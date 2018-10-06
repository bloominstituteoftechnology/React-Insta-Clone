import React from 'react'
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {

    render() {
        return (
            <div>
                <img src={this.props.post.thumbnailUrl} alt="Thumbnail" />
                <h2>{this.props.post.username}</h2>
                <img src={this.props.post.imageUrl} alt="Post" />
                <p>{this.props.post.likes} likes</p>
                {this.props.post.comments.map(comment => (
                    <CommentSection comment={comment} />
                ))}
            </div>
        )
    }
}

export default PostContainer;