import React, { Component } from 'react';

export class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            newComment: ''
        };
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        });
    }

    addComment = (event) => {
        event.preventDefault();
        const commentObj = {
            username: 'Nour',
            text: this.state.newComment
        };
        this.setState({
            comments: [...this.state.comments, commentObj],
            newComment: ''
        });
    }

    handleCommentInput = (event) => {
        this.setState({ newComment: event.target.value });
    }

    render() {
        return (
            <div className="comment-section">
                {this.state.comments.map((comment, i) => ( 
                    <div className="comment" key={i}>
                        <div className="comment-user"><b>{comment.username}</b></div>
                        <div className="comment-text">{comment.text}</div>
                    </div>)
                )}
                 <div className="comment-input">
                  <form onSubmit={this.addComment}>
                    <input type="text" placeholder="Add Comment!" value={this.state.newComment} onChange={this.handleCommentInput}  onSubmit={this.addComment} />
                    </form>
                </div>
            </div>
        );
    }
}
