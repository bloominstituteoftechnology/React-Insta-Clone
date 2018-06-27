import React from 'react';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }


    componentDidMount() {
        this.setState({ comments: this.props.comments })
    }

    addNewComment = e => {
        e.preventDefault();
        const post = this.state.post.slice();
        post.push({post: post, newPost: '' });
      }


    render() {
    return (
<div>
    {this.props.comments.map(comment => {
        return (
            <div>
            <p key={this.username + this.text}>
            <span className="comment-user">{comment.username}</span>
            <span className="comment-text">{comment.text}</span>
            </p>
            </div>
        );
    })}
</div>
    );
}
}

export default CommentSection;