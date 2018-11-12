import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from "prop-types";
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            likes: props.likes,
            inputText: ''
        }
    }

    handleChange = event => {
        this.setState({
            inputText: event.target.value
        })
    }

    addNewComment = event => {
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments,
            {text: this.state.inputText, 
                username: "Billy_Bob"}],
                inputText: ''
        })
    }

    incrementLike = event => {
        this.setState({
            likes: this.state.likes +1
        })
    }

    render() {
        return (
            <div>
                <div className='text-icons'>
                    <i onClick={this.incrementLike} class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                </div>
                <div className='likes' >
                    {`${this.state.likes} likes`}
                </div>

                {this.state.comments.map((c, i) => 
                <Comment key={i} comment={c} />)}
                <CommentInput 
                addNewComment={this.addNewComment} 
                handleChange={this.handleChange}
                /> 
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