import React, { Component } from 'react';

class CommentSection extends Component {
  
    
    render() { 
        return ( 
            <div className="comment-section">
                <div>{this.props.username}</div>
                <div>{this.props.text}</div>
            </div>
         );
    }
}
 
export default CommentSection;