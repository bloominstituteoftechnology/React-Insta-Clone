import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            current: '',
            time: props.time
        };
    }

    addComment = e => {
        e.preventDefault();
        this.setState({
            comments: this.state.comments.concat({text: this.state.current, username: 'You'}),
        });
    };

    deleteComment = id => {
        this.setState({
            comments: this.state.comments.filter(comment => comment.text + comment.user !== id)
        });
    };

    handleInputChange = e => {
        this.setState({
            current: e.target.value,
        });
    };

    /* Lifecycle Methods */

    render () {
        return (
            <div className="comments">
                {
                    this.state.comments.map((comment, ind) =>
                    <Comment 
                        key={comment.text + ind} 
                        id={comment.text + comment.user}
                        user={comment.username} 
                        text={comment.text} 
                        delete={this.deleteComment} />)
                }
                <p>{this.state.time}</p>
                <hr />
                <form onSubmit={this.addComment}>
                    <input 
                        onChange={this.handleInputChange} 
                        className="comment-input" 
                        type="text" 
                        placeholder="Add a comment..." />
                </form>
            </div>
        );
    }
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string),
    ),
    time: PropTypes.string,
};

export default CommentSection;