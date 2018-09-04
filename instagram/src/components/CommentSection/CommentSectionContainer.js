import React from 'react';
import CommentInput from './CommentInput';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';
 
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
    }

    addNewComment = event => {
        // prevent page refresh
        event.preventDefault();
        // build out the comment object
        const newComment = { text: this.state.comment, username: 'Hello_World' };
        // clone comments array
        const comments = this.state.comments.slice();
        // push object into new clone
        comments.push(newComment);
        // set new clone as state... and reset comment string
        this.setState({ comments, comment: '' });
    };

     render() {
        return (
            <div>
                {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
                <CommentInput 
                submitHandler={this.addNewComment}
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