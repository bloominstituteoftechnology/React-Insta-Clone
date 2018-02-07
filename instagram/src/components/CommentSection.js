import React from 'react';

class CommentSection extends React.Component {
    state = {
        comments: this.props.comments,
        commentEntry: '',
    }
    render() {
        return (
            <div>
                {this.props.comments.map(comment => {
                    return(
                    <div key={comment.id}>
                        <h4>{comment.username}</h4>
                        <div>{comment.text}</div>
                        {console.log(comment)}
                    </div>
                    );
                })}
                <form onSubmit={this.addComment}> <input type='text' placeholder='This doesnt work' onChange={this.handleChange} /> </form>
                {console.log(this.props.comments)}
            </div>
        );
    }
}

export default CommentSection;