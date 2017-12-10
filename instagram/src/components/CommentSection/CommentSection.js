import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            newComment: ''
        };
    }

    componentDidMount() {
        this.setState({ comments: this.props.comments });
    }

    addComment = (e) => {
        e.preventDefault();
        const commentObj = {
            username: 'Uohna',
            text: this.setState.newComment
        };
        const commentArray = this.state.comment;
        commentArray.push(commentObj);
        this.setState({
            comments: commentArray,
            newComment: ''
        });
    }

    handleCommentInput = (e) => {
        this.setState({ newComment: e.target.value });
    }

    render() {
        return (
            <div className="comment-section">
                {this.state.comments ? this.state.comments.map((comment, i) => (
                    <div className="comment" key={i}>
                        <div className="comment-user"><strong>{comment.username}</strong></div>
                        <div className="comment-text"><strong>{comment.text}</strong></div>
                    </div>
                )) : null }
                <div className="comment-input">
                    <input type="text" placeholder="..." value={this.setState.newComment} onChange={this.handleCommeInput} />
                    <button type="submit" onClick={this.addComment}>Submit</button>
                </div>
            </div>
        );
    }
}

export default CommentSection;