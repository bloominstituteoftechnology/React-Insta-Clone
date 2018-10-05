import React, { Component } from 'react';
import Comment from './Comment'

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="comment-section">
                {this.props.comments.map (x=> 
                    <Comment 
                    username={x.username}
                    text={x.text}
                    />)}
            </div>
         );
    }
}
 
export default CommentSection;