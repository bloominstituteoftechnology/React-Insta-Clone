import React, { Component } from 'react';


class Comment extends Component {
    
    render() { 
        return ( 
            <div className="comment-data">
                <span className="comment-username">{this.props.name}</span>
                <span className="comment">{this.props.comment}</span>
            </div>
         );
    }
}
 
export default Comment;