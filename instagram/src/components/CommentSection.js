import React from 'react';

class CommentSection extends React.Component {
    state = {
        comments: this.props.comments,
        commentEntry: '',
    }

    handleChange = (event) => {
        this.setState({ commentEntry: event.target.value });
    }

    addComment = (event) => {
        event.preventDefault();
        const newComment = {
            id: Math.floor(Math.random() * 10000),
            text: this.state.commentEntry,
            username: this.props.currentUser,
        }
        const updatedComments = [...this.state.comments, newComment];
        this.setState({ comments: updatedComments, commentEntry: '' });
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => {
                    return(
                    <div key={comment.id}>
                        <h4>{comment.username}</h4>
                        <div>{comment.text}</div>
                    </div>
                    );
                })}
                <form onSubmit={this.addComment}> <input type='text' placeholder='This doesnt work' onChange={this.handleChange} /> </form>
            </div>
        );
    }
}

export default CommentSection;