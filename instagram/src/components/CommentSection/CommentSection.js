import React, { Component } from 'react';
import Comment from "./Comment";

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments

        }
    }

    addNewComment = (event, index) => {
        this.setState({[event.target.name]: event.target.value})
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