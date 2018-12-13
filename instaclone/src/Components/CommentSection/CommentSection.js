import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment'

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: this.props.comments
        }
    }
    render() { 
        console.log(this.state.comments)
        return ( 
            <div className="comment-section-container">
                {this.state.comments.map((comment,i)=>{
                  return <Comment key={i} username={comment.username} text={comment.text} />
                })}
            </div>
        );
    }
}
 
CommentSection.propTypes={
    comments: PropTypes.array
}

export default CommentSection;