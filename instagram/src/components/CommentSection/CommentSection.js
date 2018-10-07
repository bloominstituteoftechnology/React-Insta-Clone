import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment.js';
import PropTypes from 'prop-types';

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
                    username: 'commenter',
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
                <p className='timestamp'>{this.props.data.timestamp.toUpperCase()}</p>
                {/* comment input field */}
                <div className='comment-input-section'>
                    <form onSubmit={this.addNewComment}>
                        <input 
                            className='comment-input' 
                            type='text' 
                            placeholder='Add a comment...'
                            value={this.state.input}
                            onChange={this.updateInput}>
                        </input>
                    </form>
                    {/* comment option button */}
                    <div>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
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