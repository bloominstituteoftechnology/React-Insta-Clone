import React from 'react';
import './Comments.css';
import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentTime from './CommentTime';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            comments: props.comments
        }
    }

    componentDidMount() {
        if (localStorage.getItem('comments' + this.props.id)) {
            this.setState({ comments: JSON.parse(localStorage.getItem('comments' + this.props.id)) });
        } else {
            localStorage.setItem('comments' + this.props.id, JSON.stringify(this.state.comments));
        }
    }

    handleInput = event => {
        this.setState({ comment: event.target.value });
    }

    addComment = event => {
        event.preventDefault();
        const comments = this.state.comments.slice();

        comments.push({ username: this.props.name, text: this.state.comment });

        this.setState({ comments: comments, comment: '' });

        setTimeout(() => {
            localStorage.setItem('comments' + this.props.id, JSON.stringify(this.state.comments));
        })
    };

    deleteComment = index => {
        let comments = this.state.comments.slice();

        comments.splice(index, 1);

        this.setState({ comments: comments });

        setTimeout(() => {
            localStorage.setItem('comments' + this.props.id, JSON.stringify(this.state.comments));
        })
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment, index) => <Comment key={index} index={index} deleteComment={this.deleteComment} comment={comment} />)}
                <CommentTime timestamp={this.props.timestamp} />
                <CommentInput
                    comment={this.state.comment}
                    addComment={this.addComment}
                    handleInput={this.handleInput}
                />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;