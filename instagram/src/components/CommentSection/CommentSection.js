import React, {Component} from "react";
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';
import {StyledCommentContainer, StyledInput} from './CommentSectionStyle';


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            current: '',
            isEmpty: true,
            time: props.time
        };
    }

    addNewComment = e => {
        e.preventDefault();
        this.setState({
            comments: this.state.comments.concat({
                text: this.state.current,
                username: ''
            })
        })
    }

    handleInputChange = e => {
        e.preventDefault();
        this.setState({
            current: e.target.value,

        });
    };
    render() {
        return (
            <StyledCommentContainer> 
                {this.state.comments.map((comment, index) => 
                <Comment 
                    key={index} 
                    user={comment.username} 
                    text={comment.text}
                />)}
                <p>{this.state.time}</p>
                <form onSubmit={this.addNewComment}>
                    <StyledInput
                        onChange={this.handleInputChange}
                        comment={this.state.comments}
                        type='text'
                        placeholder='Add a comment...'>
                    </StyledInput>
                </form>
                <hr/>
            </StyledCommentContainer>
        )
    }
};

CommentSection.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.string
};


export default CommentSection;