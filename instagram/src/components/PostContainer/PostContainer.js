import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';


class PostContainer extends Component {
    
    
    render() { 
       
        return (
            <div className="post-container">
                <div className="post-header">
                    <div className="thumbnail"><img src={this.props.thumbnailUrl} alt="" /></div>
                    <div>{this.props.username}</div>
                </div>
                <div><img src={this.props.imageUrl} alt="" /></div>
                <div className="comment-icons">
                <div><i className="far fa-heart fa-3x"></i></div>
                <div><i className="far fa-comment fa-flip-horizontal fa-3x"></i></div>
                </div>
                <span className="likes">{this.props.likes} likes</span>
                <CommentSection />
            </div>
        )
    }
}

 
export default PostContainer;