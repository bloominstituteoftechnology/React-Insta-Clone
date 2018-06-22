import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            commentKey: props.commentKey,
            addNewComment: props.addNewComment,
            updateComment: props.updateComment,
            commentText: props.commentText,
        }
    }

    componentDidMount(){
        this.setState({comments: this.props.commentInfo})
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => 
                    <Comment key={Math.random(Date.now())}
                            comment={comment.text}
                            userIn={comment.username} />
                )}
                <CommentInput commentKey={this.state.commentKey}
                              addNewComment={this.state.addNewComment}
                              updateComment={this.state.updateComment} />
            </div>
        );
    }

}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};

export default CommentSection;