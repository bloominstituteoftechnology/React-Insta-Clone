import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    commentHandler = e => {
        this.setState({ comment: e.target.value });
      };
    
      handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = { text: this.state.comment, username: 'StevenOneill' };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: '' });
      };

    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <CommentInput 
                    comment={this.state.comment}
                    submitComment={this.handleCommentSubmit}
                    changeComment={this.commentHandler}
                />
            </div>
        );
    }
}

CommentSectionContainer.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };

export default CommentSectionContainer;