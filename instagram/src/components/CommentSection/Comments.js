import React, { Component } from 'react';

import './Comments.css';

class Comments extends Component {
    constructor(props) {
        super();
        this.state = {
            username: 'lol12',
            comments:[],
            newCommentText: ''
        }
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments 
        });
    }
    
    submitNewComment = event => {
        if (event.keyCode === 13) {
            const newComment = {
                username: this.state.username,
                text: this.state.newCommentText
            }

            this.setState({
                comments: [...this.state.comments, newComment],
                newCommentText: ''
            })
        }
    }

    updateNewComment = event => {
        this.setState({
            newCommentText: event.target.value
        });
    }

    render() {
        return (
            <div className='Comments'>
                <div className='Comments__list'>
                    {this.state.comments.map((comment, index) => {
                        return (
                            <div className='Comments__comment' key={index}>
                                <h3 className='Comments__comment-username'>{comment.username}</h3>
                                <p className='Comments__comment-body'>{comment.text}</p>
                            </div>
                        );
                    })}
                </div>

                {this.props.children}

                <div className = 'Comments__add'>
                    <input
                        className='Comments__addField'
                        type='text'
                        value={this.state.newCommentText}
                        onChange={this.updateNewComment}
                        onKeyDown={this.submitNewComment}
                        placeholder='Add a comment...'
                    ></input>
                </div>
            </div>
        );
    }
};

export default Comments;