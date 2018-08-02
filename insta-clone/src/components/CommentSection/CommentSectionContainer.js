import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
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
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <CommentInput 
                submitHandler={this.commentSubmit}
                changeHandler={this.commentHandler}
                comment={this.state.comment}
                />
            </div>
        );
    }
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ 
            text: PropTypes.string,
            username: PropTypes.string,
        })
    )
}

export default CommentSection;