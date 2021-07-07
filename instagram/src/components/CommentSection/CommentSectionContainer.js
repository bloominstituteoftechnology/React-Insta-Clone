import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            comments: props.comments,
            comment: ""
        };
    }

    changeComments = event => {
        this.setState({ comment: event.target.value});
    }

    commentSubmitHandler = event => {
        event.preventDefault();
        const newComment = { text: this.state.comment, username: "Juno"};
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({comments, comment: ""});
    }

    render() {
        return (
            <div>
                {this.state.comments.map((content, index) => <Comment key={index} comment={content} />)}
                <CommentInput 
                    changeHandler={this.changeComments}
                    comment={this.state.comment}
                    saveHandler={this.commentSubmitHandler} 
                />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string,
                            username: PropTypes.string
        })
    )
};

export default CommentSection;