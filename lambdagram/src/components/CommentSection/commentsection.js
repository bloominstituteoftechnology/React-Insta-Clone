import React from 'react';
import PropTypes from 'prop-types';
// import './commentsection.css';
import Styled from 'styled-components';

import Comment from './comment';

const ACommentSection = Styled.div`
    width: 95%;
    margin: auto;
`;
const CommentHr = Styled.hr`
    height: 1px;
    border: 0;
    background-color: lightgray;
`;
const CommentingStuff = Styled.div`
    margin: auto;
    display: flex;
`;
const CommentForm = Styled.form`
    width: 100%;
`;
const CommentBox = Styled.input`
    display: block;
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    margin: 10px auto 10px auto;
`;
const CommentingStuffP = Styled.p`
    font-weight: bolder;
`;


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: props.timestamp,
            comments: props.comments,
            commentInput: ''
        }
    }

    handleInput = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleComment = (event) => {
        event.preventDefault();
        if(!event.target.value) {
            this.setState({
                comments: [...this.state.comments, {username: 'Vera', text: this.state.commentInput}],
                commentInput: ''
            });
        }
    }

    render() {
        return (
            <ACommentSection>
                {this.state.comments.map( (comment) => {
                    return (
                        <Comment 
                            comment={comment} 
                            key={`${comment.username} - ${Math.round(Math.random() * 10000000000000000)}`} 
                        />
                    );
                })}
                <p>{this.state.timestamp}</p>
                <CommentHr />
                <CommentingStuff>
                    <CommentForm 
                        onSubmit={this.handleComment}>
                        <CommentBox 
                            name='commentInput' 
                            type='text' 
                            placeholder='Add a comment...' 
                            value={this.state.commentInput} 
                            onChange={this.handleInput} 
                            onFocus={this.handleInput} 
                        ></CommentBox>
                    </CommentForm>
                    <CommentingStuffP>...</CommentingStuffP>
                </CommentingStuff>
            </ACommentSection>
        );
    }
}

CommentSection.propTypes = {
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}

export default CommentSection;
