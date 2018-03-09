import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';
import './CommentSection.css';

class CommentSection extends Component {
    constructor(props) {
        super();
        this.state = {
            comments: [],
            newComment: ''
        }
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        });
    }

    addComment = (event) => {
        if (event.keyCode === 13) {
        event.preventDefault();
        const newComment = {
            username: 'AD & Josh',
            text: this.state.newCommentInput,
        }

        this.setState({
            comments: [...this.state.comments, newComment],
            newCommentInput: ''
        });
        }
    }

    handleCommentInput = (event) => {
        this.setState({ newCommentInput: event.target.value });
    }



render() {
    return (
        <div className="CommentSection">
            <div className="CommentSection__comment_list">
             {this.state.comments.map((comment, index) => {
                 return (
                    <div className="CommentSection__comment" key={index}>
                        <span className="CommentSection__comment-user">{comment.username}</span>
                        <span className="CommentSection__comment-text">{comment.text}</span>
                    </div>
                 );
         })}
            </div>

            <div className="CommenSection__addComment">
                <Input type="text" placeholder="Add comment..." value={this.state.newCommentInput} onChange={this.handleCommentInput} onKeyDown={this.addComment} />

            </div>
        </div>
    );
}

};

export default CommentSection;