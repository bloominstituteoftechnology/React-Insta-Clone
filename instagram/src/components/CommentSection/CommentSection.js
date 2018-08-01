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
            timestamp: props.timestamp,
            comment: ''
        }
        this.addNewComment = this.addNewComment.bind(this);
    }

    addNewComment(event, index) {
        event.preventDefault();
        this.setState({comments: this.state.comments.concat({username: localStorage.getItem('username'), text: [event.target[0].value]}), comment: ''});
        this.props.clear();
        // localStorage.setItem(index, JSON.stringify({username: 'Pseudosaurus', text: [event.target[0].value]}));
    }

    render() {
        // let localArr = [];
        // if (localStorage.length > 0) {
        //     for(let i = 0; i < localStorage.length; i++) {
        //         localArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        //     }
        // }
        return (
            <div className="comments-section">
            {this.state.comments.map((comment, index) => <Comment username={comment.username} text={comment.text} key={index} />)}
            {/* {localArr.map((comment, index) => <Comment username={comment.username} text={comment.text} key={index} />)} */}
            <div className="timestamp">{this.state.timestamp}</div>
            <CommentInput add={this.addNewComment} value={this.state.comment} input={this.props.input} comment={this.props.comment} />
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