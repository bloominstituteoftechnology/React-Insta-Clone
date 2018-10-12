import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';
import './CommentSection.css';
import styled from 'styled-components';

const CommentSectionDiv = styled.div`
    font-size: 14px;
    margin-left: 10px;
    border-bottom: 1px solid lightgray;
`

const Timestamp = styled.div`
    padding: 10px 0;
`

const AddComment = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    align-items: center;
`

const CommentInput = styled.input`
    margin-top: 10px;
    padding-left: 10px;
    border: none;
    font-size: 16px;
    width: 90%;
    height: 30px;
    &:focus{
        outline: none;
    }
`

class CommentSection extends Component  {
    state = {
        content: [],
        timestamp: "",
        input: ""
    }

    componentDidMount() {
        this.setState((state)   =>  ({
            content: this.props.content,
            timestamp: this.props.timestamp,
        }))
    }

    inputChangeHandler = ({target}) =>  {
        this.setState((state)   =>  ({
            input: target.value,
        }))
    }

    addComment(event)    {
        event.preventDefault();
        let newContent  =   this.state.content;
        newContent.push({username: "Ryntak", text: this.state.input})
        this.setState((state)   =>  ({
            content: newContent,
            input: "",
        }))
    }

    render()    {
        return(
            <div>
                <CommentSectionDiv>
                    {this.state.content.map((comment, index)    =>  {
                        return <Comment key={index} username={comment.username} text={comment.text}/>
                    })}
                    <Timestamp>{this.state.timestamp}</Timestamp>
                </CommentSectionDiv>
                <AddComment>
                    <form onSubmit={event => this.addComment(event)}>
                        <CommentInput value={this.state.input} onChange={this.inputChangeHandler} placeholder="Add a comment..."></CommentInput>
                    </form>
                    <i className="fas fa-ellipsis-h fa-lg"></i>
                </AddComment>
            </div>
        )
    }
}

CommentSection.propTypes = {
    content: PropTypes.array.isRequired,
    timestamp: PropTypes.string.isRequired
}

export default CommentSection;
