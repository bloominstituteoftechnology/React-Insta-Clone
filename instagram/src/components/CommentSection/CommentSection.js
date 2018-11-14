import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment/Comment';
import CommentInput from './CommentInput/CommentInput';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            inputText: '',
        };
    }

    addNewComment = event => {
        event.preventDefault();
        this.setState({ 
            comments: [...this.state.comments, { text: this.state.inputText, username: 'DarenLarson' }],
            inputText: ''
        })
    }

    commentHandler = event => {
        this.setState({ inputText: event.target.value });
      };

    render() {
        return (
            <div className="comment-section">
                {this.state.comments.map((commentMap, index) => (
                    <Comment key={index} comment={commentMap} />
                ))}

                <CommentInput 
                    addNewComment={this.addNewComment} 
                    inputText={this.state.inputText}
                    commentHandler={this.commentHandler} 
                />
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
}

export default CommentSection;