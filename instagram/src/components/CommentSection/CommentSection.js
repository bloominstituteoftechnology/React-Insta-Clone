import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment.js'

class CommentSection extends React.Component {
    render() {
        return (
            <div>
                {this.props.data.comments.map(comment => {
                    return (
                        <Comment comment={comment}/>
                )
                })}
                <div className='comment-input-section'>
                    <form>
                        <input className='comment-input' type='text' placeholder='Add a comment...'></input>
                    </form>
                    <div>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentSection;