import React, { Component  } from "react";
import PropTypes from "prop-types";
import Comment from './Comment';
import Input from "./Input";
import './CommentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }
    render() {
        return (
            <div className='comment-section'>           
            {this.state.comments.map((c, i) => <Comment comment={c} key={i}  />)}
            <Input />
            </div>
        );
    }
}

CommentSection.PropTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({text: PropTypes.string, username: PropTypes.string})
    )
};

export default CommentSection;