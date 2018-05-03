import React, { Component } from 'react';



class CommentSection extends Component {
        constructor() {
            super();
            this.state = {
                comments: [],
                newComment: ''
            }
    }


componentDidMount() {
    this.setState({
        comments: this.props.comments
    });
}

addComment = () => {
    const commentBody = {
        username: 'Test',
        text: this.state.newComment
    };
    this.setState({
        comments: [this.state.comments, commentBody],
        addComment: ''
    });
  }

commentInput = () => {
    this.setState({ newComment: this.target.value})
}

render() {
        return (
            <div>
                {this.state.comments ? this.state.comments.map((comment, i) => ( 
                    <div key={i}>
                        <div><b>{comment.username}</b></div>
                        <div>{comment.text}</div>
                    </div>)
                ) : null}
                 <div>
                    <input type="text" placeholder="..." value={this.state.newComment} onChange={this.handleCommentInput} />
                    <button type="submit" onClick={this.addComment}>Submit</button>
                </div>
            </div>
        );
    }
}

export default CommentSection;