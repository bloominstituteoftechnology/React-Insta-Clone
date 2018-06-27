import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }


    componentDidMount() {
        this.setState({ comments: this.state.comments })
    }

    commentInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    addNewComment = e => {
        e.preventDefault();
        const comments = this.state.comments.slice();
        const newComment = this.state.newComment;

        if (this.newComment !== '') comments.push(newComment);
        this.setState({ comments: comments, newComment: '' })
      }


    render() {
    return (
<div>
    {this.state.comments.map(comment => {
        return (
            <div>
            <p key={this.username + this.text}>
            <span className="comment-user">{this.username}</span>
            <span className="comment-text">{this.text}</span>
            </p>
            </div>
        );
    })}
    <form onSubmit={this.addNewComment} className="comment-input">
        <input
        type="text"
        placeholder="Add a comment as..."
        value={this.state.newComment}
        onChange={this.commentInput}
        ></input>
        </form>
</div>
    );
}
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};

export default CommentSection;