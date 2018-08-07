import React, { Component } from 'react';
import Comment from "./Comment";

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    changeHandler = e => {
        this.setState({comment: e.target.value})
    }

    addNewComment = e => {
        const newComment = {text: this.state.comment, username: 'Fred'};
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({comments, comment: ''});
    }

    render() {
        return(
            <div>
                <Comment comments={this.state.comments} />
            </div>
        );
    }
}

export default CommentSection;