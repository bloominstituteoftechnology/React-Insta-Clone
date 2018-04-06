import React, { Component } from 'react';

class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            addComment: '', 
            comments: []
        };
    }
    componentDidMount() {
        this.setState({ comment: this.props.comments });
    }
    handleSubmitComment = () => {
        const { comments } = this.state;
        comments.push({
            username: 'Johnny Appleseed', 
            text: this.state.addComment
        });
        this.setState({ comments, addComment: ''});
    }
    handleAddComment = event => {
        this.setState({ [event.target.name] : event.target.value });
    }
    render() {
        return (
            <div>
                {this.state.comments.map((comment, i) => <div key={i}>{comment.username} {comment.text}</div>)}
                <input type="text" name="addComment" value={this.state.addComment} placeholder="Add a comment... " onChange={this.andleAddComment} />
                <button onClick={this.handleSubmitComment}>Add Comment</button>
                <div>{this.props.time}</div>
            </div>
        );
    }
}

export default CommentSection;
