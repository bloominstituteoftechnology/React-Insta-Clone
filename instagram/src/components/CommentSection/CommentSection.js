import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from "prop-types";
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }
    render() {
        // console.log('comment section props =', this.state.comments)
        return (
            <div>
                {this.state.comments.map((c, i) => 
                <Comment key={i} comment={c} />)}
                <CommentInput /> 
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string})
    )
}

export default CommentSection;