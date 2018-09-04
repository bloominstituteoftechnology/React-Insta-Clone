import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';
import CommentInput from './CommentInput.js';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            commentInputText: ''
        };
    }

    addComment = event => {
        event.preventDefault();
        if (this.state.commentInputText) {
            this.setState ({
                comments: [...this.state.comments, 
                            {text: this.state.commentInputText, 
                            username: 'comment_troll'}],
                commentInputText: ''
            });
        }
    }
    
    handleCommentInput = event => {
        this.setState({ commentInputText: event.target.value});
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
                <CommentInput commentInputText={this.state.commentInputText}
                addComment={this.addComment}
                handleCommentInput={this.handleCommentInput}/>
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};



export default CommentSection;


