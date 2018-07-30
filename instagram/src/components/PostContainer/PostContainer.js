import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
       
        return (
            <div className="post-container">
                <div className="post-header">
                    <div><img src={this.props.thumbnailUrl} alt="" /></div>
                    <div>{this.props.username}</div>
                </div>
                <div><img src={this.props.imageUrl} alt="" /></div>
                <div>{this.props.likes}</div>
                    <div>
                        {this.props.comments.map(comment => {
                            return (
                                <CommentSection />
                            )
                    })}
                </div>
                <div>{this.props.timestamp}</div>
            </div>
        )
    }
}
 
export default PostContainer;