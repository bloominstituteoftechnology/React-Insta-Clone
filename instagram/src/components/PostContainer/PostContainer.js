import React, { Component } from 'react';
// import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection'
import dummyData from '../../dummy-data';

class PostContainer extends Component {
    state = {dummyData}
    render() {
        return (
            <div className="post-container">
                {this.state.dummyData.map(post => {
                    return (
                    <div className="post-container">
                        <div><img src={post.thumbnailUrl} />{post.username}</div>
                        
                        <div><img src={post.imageUrl} /></div>
                        <div>likes: {post.likes} {post.timestamp}</div>
                        <div className="comment-section">{post.comments.map(comment => {
                            return (
                                <ul>
                                    <li>{comment.username}</li>
                                    <li>{comment.text}</li>
                                </ul>
                            )
                        })}
                        </div>
                    </div>
                    );
                })}
            </div>
        )
    }
}

export default PostContainer