import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css'
import Comment from '../Comment/Comment'

import AddComment from '../AddComment/AddComment'

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
                <div className="comments">
                    {this.state.comments.map((comment,i)=>{
                    return <Comment key={i} username={comment.username} text={comment.text} />
                    })}
                </div>
                <p className="time-stamp">{this.props.timestamp}</p>
                <hr className="comment-divider"/>
                <AddComment />
            </div>
        );
    }
}
 
CommentSection.propTypes={
    comments: PropTypes.array
}

export default CommentSection;