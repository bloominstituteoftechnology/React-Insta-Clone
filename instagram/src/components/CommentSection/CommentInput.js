import React from 'react';

class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            comments: props.comments
        };
    
        this.addNewComment = this.addNewComment.bind(this);
        this.commentSubmit = this.commentSubmit.bind(this);
    }
    
    addNewComment(event) {
        console.log(this.state.comments);
        this.setState({ comment: event.target.comment });
    }

    commentSubmit(event){
        event.preventDefault();
        const newComment = { text: this.state.comment, username: "khoaNguyen" };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: "" });
    }

    render() {
        return (
            <form onSubmit={this.commentSubmit}>
            <input 
                onChange={this.addNewComment}
                value={this.comment}
                id="input" 
                type="text" 
                placeholder="     Add a comment... " 
            />
            </form>
        );
    }
};

export default CommentInput;