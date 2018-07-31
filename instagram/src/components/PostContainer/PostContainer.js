import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                <div><i className="far fa-comment fa-3x"></i></div>
                </div>
                <div className="likes">{this.props.likes} likes</div>
                    <div className="section-comments">
                        {this.props.comments.map((comment, index) => {
                            return (
                                <CommentSection
                                    key={index}
                                    username={comment.username}
                                    text={comment.text}
                                 />
                            )
                    })}
                </div>
                <div className="timestamp">{this.props.timestamp}</div>
            </div>
        )
    }
}

PostContainer.propTypes = {
    data: PropTypes.shape ({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes:PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.string
    })
}
 
export default PostContainer;