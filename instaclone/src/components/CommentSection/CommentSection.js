import React from 'react';
import PropTypes from 'prop-types';
import Comment from "./Comment";
import AddComment from "./AddComment";
import moment from 'moment';
import styled from 'styled-components';

const TimestampStyle = styled.p`
    color: #B5B5B5;
    font-size: 13px;
    padding-left: 10px;
`

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: '',
            timestamp: props.timestamp
        };
    }

    commentHandler = e => {
        this.setState({comment: e.target.value})
    }

    submitComment = e => {
        e.preventDefault();
        if (this.state.comment.length > 0){
        const newComment = {username: localStorage.getItem('user'), text: this.state.comment}
        const commentString = this.state.comments
        commentString.push(newComment)
        this.setState({
            comments: commentString,
            comment: ''
        })}
    }

    render(){
        return(
        <div className="comment-container">
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
        <TimestampStyle>{moment(this.state.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}</TimestampStyle>
        <AddComment 
            comment={this.state.comment}
            submitComment={this.submitComment}
            commentHandler={this.commentHandler}
        />
        </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape(
            {text: PropTypes.string, 
            username: PropTypes.string}
            )
    )
}

export default CommentSection;