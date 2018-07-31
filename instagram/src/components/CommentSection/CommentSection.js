import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            timestamp: props.timestamp
        }
        this.addNewComment = this.addNewComment.bind(this);
    }

    addNewComment(event, index) {
        event.preventDefault();
        this.setState({comments: this.state.comments.concat({username: 'Pseudosaurus', text: [event.target[0].value]})});
        console.log(event);
    }

    render() {
        return (
            <div className="comments-section">
            {this.state.comments.map((comment, index) => <Comment username={comment.username} text={comment.text} key={index} />)}
            <div className="timestamp">{this.state.timestamp}</div>
            <CommentInput add={this.addNewComment} />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}


export default CommentSection;