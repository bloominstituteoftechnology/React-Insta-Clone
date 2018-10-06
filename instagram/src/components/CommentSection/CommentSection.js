import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: '',
        };
    }

    commentHandler = event => {
        this.setState({ comment: event.target.value });
    };

    commentSubmit = event => {
        // prevent page refresh
        event.preventDefault();
        // build out our comment obj
        const newComment = { text: this.state.comment, username: 'Bryce_Monkey' };
        // clone our comments array
        const comments = this.state.comments.slice();
        // push obj into new clone
        comments.push(newComment);
        // set new clone as state... + reset our comment str
        this.setState({ comments, comment: '' });
    };

    render() {
        return ( 
            <div>
                {this.state.comments.map((comment, index) =>
                    <Comment 
                    key={index}
                    comment={comment}
                    />
                    )}
                    <CommentInput 
                    comment={this.state.comment}
                    handleChange={this.commentHandler}
                    submitHandler={this.commentSubmit}
                    />
            </div>
        ); 
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string,
        })
    )
}

export default CommentSection;