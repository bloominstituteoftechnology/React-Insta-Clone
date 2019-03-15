import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            likes: [],
            newComment: '',
            comments: []
        }
    }


    componentDidMount() {
        console.log(this.props.likesData);
        this.setState({ comments: this.props.commentData, likes: this.props.likesData });
    }

    commentInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    addComment = event => {
        event.preventDefault();
        const commentsArray = this.state.comments;
        const myNewComment = {
            username: 'SleepyViking',
            text: this.state.newComment
        }
        if (myNewComment.text !== '') commentsArray.push(myNewComment);
        this.setState({ comments: commentsArray, newComment: '' })
    }

    render() {
        console.log(this.state.likes)
        return (
            <div>
                <div>
                    <i className="far fa-heart margin-left-right icon"></i>
                    <i className="far fa-comment margin-left-right icon"></i>
                </div>
                <p className='margin-left-right'>{this.state.likes} likes</p>

                {this.state.comments.map(comment => {
                    return (
                        <div className='margin-left-right' key={comment.username + (Math.random() * 1000 * (Math.random() * 100))}>
                            <b>{`${comment.username}:`}</b> {`${comment.text}`}
                        </div>
                    );
                })}

                <form className='form' onSubmit={this.addComment}>
                    <input
                        className='comment-input'
                        name='newComment'
                        placeholder='Add a comment as SleepyViking...'
                        value={this.state.newComment}
                        onChange={this.commentInput}
                    />
                    <button className='btn btn-primary comment-button' type="submit">Add Comment</button>
                </form>
            </div>
        );
    }
}

export default CommentSection;