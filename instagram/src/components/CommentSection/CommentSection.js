import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Timestamp = styled.p`
    color: #757575;
    font-size: 12px;
`

const CommentInputSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #E6E6E6;
    margin-top: 15px;
    padding-top: 10px;
`

const CommentInput = styled.input`
    height: 45px; 
    border: 0px;
    width: 565px;
    font-size: 16px;
    outline-width: 0;
`

const Squarellipsis = styled.span`
    height: 5px;
    width: 5px;
    background-color: black;
    display: inline-block;
    margin: 1px;
`

class CommentSection extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            input: ''
        }
    }
    
    // setting comments as data on state object

    componentDidMount() {
        this.setState({
            comments: this.props.data.comments
        })
    }

    // setting input of comment field on state object

    updateInput = (e) => {
        e.preventDefault();
        this.setState({
            input: e.target.value
        })
    }

    //function for submitting comment

    addNewComment = (e) => {
        e.preventDefault();
        if (this.state.input !== '') {
            this.setState({
                comments: [...this.state.comments, {
                    username: localStorage.getItem('username'),
                    text: this.state.input
                }],
                input: ''
            })
        }
    }

    //rendering comment section

    render() {
        return (
            <div>
                {/* list of comments */}
                {this.state.comments.map(comment => {
                    return (
                        <Comment 
                            key={Math.random()} 
                            comment={comment}
                        />
                    )
                })}
                {/* time stamp */}
                <Timestamp>{this.props.data.timestamp.toUpperCase()}</Timestamp>
                {/* comment input field */}
                <CommentInputSection>
                    <form onSubmit={this.addNewComment}>
                        <CommentInput 
                            className='comment-input' 
                            type='text' 
                            placeholder='Add a comment...'
                            value={this.state.input}
                            onChange={this.updateInput}
                        />
                    </form>
                    {/* comment option button */}
                    <div>
                        <Squarellipsis/>
                        <Squarellipsis/>
                        <Squarellipsis/>
                    </div>
                </CommentInputSection>
            </div>
        )
    }
}

// checking proptypes for comment section

CommentSection.propTypes = {
    data: PropTypes.shape({
        timestamp: PropTypes.string
    }),
}

export default CommentSection;