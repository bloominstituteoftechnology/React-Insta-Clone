import React from 'react';
import Comment from './Comment';
import './commentsection.css';
import moment from 'moment';
import CommentForm from './CommentForm'
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Comments = styled.div`
    margin: 0 15px;
`;

const Timestamp = styled.p`
    text-transform: uppercase;
    color: gray;
    font-size: 10px;
    margin: 8px 15px 0;
    border-bottom: .5px solid gray;
    padding-bottom: 11px;
`;

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: this.props.post.timestamp,
            comments: this.props.post.comments,
            username: this.props.username,
            newComment: '',  
        }
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addNewComment = (event) => {
        event.preventDefault();
        if (this.state.newComment !== ''){
            let comments = this.state.comments;
            let commentToAdd = {
                text: this.state.newComment,
                username: this.state.username,
            }
            comments.push(commentToAdd);
            this.setState({
                comments: comments,
                newComment: ''
            })
        }
        event.target.reset();
    }

    deleteComment = (event) => {
        event.preventDefault();
        event.target.parentNode.classList.add('hidden');
    }

    render() {
        return (
            <div>
                <Comments>
                    {this.state.comments.map((comment, i) => <Comment key={i} deleteComment={this.deleteComment} comment={comment} username={this.state.username}/>)}
                </Comments>
                <Timestamp>{moment(this.state.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</Timestamp>
                <CommentForm changeHandler={this.changeHandler} addNewComment={this.addNewComment}/>
            </div>
        )
    }
}

CommentSection.propTypes = {
    state: PropTypes.shape({
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.object),
      })
}

export default CommentSection;