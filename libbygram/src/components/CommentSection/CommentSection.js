import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Comment from './Comment';
import Likes from './Likes';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    componentDidMount() {
        this.setState({ comments: this.state.comments })
    }

    commentInput = event => {
        this.setState({ comment: event.target.value })
    };

    addNewComment = event => {
        event.preventDefault();
        const comments = this.state.comments.slice();
        if (this.comment !== '') comments.push({ username:'libbmae', text:this.state.comment });
        this.setState({ comments, comment: '' })
      }

   


    render() {
    return (
<div>
    {this.state.comments.map(comment => {
        return (
            <div>
            <Likes 
            likes={this.state.likes}/>
            </div>
        );
    })}
    <form onSubmit={this.addNewComment} className="comment-input">
        <input
        type="text"
        placeholder="Add a comment as..."
        value={this.state.newComment}
        onChange={this.commentInput}
        ></input>
        </form>
</div>
    );
}
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};

export default CommentSection;