import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            time: props.time
        };
    }

    render () {
        return (
            <div className="comments">
                {
                    this.state.comments.map((comment, ind) =>
                    <Comment key={ind} user={comment.username} text={comment.text} />)
                }
                <p>{this.state.time}</p>
                <hr />
                <form>
                    <input className="comment-input" type="text" placeholder="Add a comment..." />
                </form>
            </div>
        );
    }
};

CommentSection.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
};

export default CommentSection;