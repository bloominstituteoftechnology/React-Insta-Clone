import React from 'react';

class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            comments: this.comments
        };
    
        this.addNewComment = this.addNewComment.bind(this);
    }
    
    addNewComment(event) {
        this.setState({ comment: event.target.value });
    }

    

    render() {
        return (
            <form onSubmit={(event) => this.props.commentSubmit(event, this.state.comment)
            }>
            <input 
                onChange={this.addNewComment}
                value={this.state.comment}
                id="input" 
                type="text" 
                placeholder="     Add a comment... " 
            />
            </form>
        );
    }
};

export default CommentInput;