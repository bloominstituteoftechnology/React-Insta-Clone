import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment.js';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.data.comments
        }
    }

    render() {
        return (
            <div>
                {/* list of comments */}
                {this.state.comments.map(comment => {
                    return (
                        <Comment key={Math.random()} comment={comment}/>
                )
                })}
                {/* time stamp */}
                <p className='timestamp'>{this.props.data.timestamp.toUpperCase()}</p>
                {/* comment input field */}
                <div className='comment-input-section'>
                    <form>
                        <input className='comment-input' type='text' placeholder='Add a comment...'></input>
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

CommentSection.propTypes = {
    data: PropTypes.shape({
        timestamp: PropTypes.string
    }),
}

export default CommentSection;