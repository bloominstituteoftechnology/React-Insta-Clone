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
            <div className='comment-section'>
                {this.state.comments.map(comment => {
                    return(
                    <div key={comment.id} className='comment'>
                        <span className='comment-username'>{comment.username}</span>
                        <span className='comment-text'>{comment.text}</span>
                    </div>
                    );
                })}
                <div className='sectioner'></div>
                <form className='comment-box' onSubmit={this.addComment}>
                    <input type='text' placeholder='Add a comment...' value={this.state.commentEntry} onChange={this.handleChange} />
                    <div><img className='ellipsis' src={require('../assets/icons/ellipsis.png')} alt='broke' /></div>
                </form>
            </div>
        );
    }
}

export default CommentSection;