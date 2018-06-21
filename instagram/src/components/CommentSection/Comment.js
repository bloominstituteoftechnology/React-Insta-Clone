import React from 'react';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    componentDidMount() {
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
            //if id exists set the comments by that parsed array
            this.setState({ comments: JSON.parse(localStorage.getItem(id)) });
        } else {
            // call setComment()
            this.setComments();
        }
    }

    // componentWillUnmount() {
    //     this.setComments();
    // }

    setComments = () => {
        localStorage.setItem(this.props.postId, JSON.stringify(this.state.comments));
    }

    commentTextHandler = e => {
        this.setState({ comment: e.target.value })
    }

    commentSubmitHandler = e => {
        e.preventDefault();
        let newComment = { text: this.state.comment, username: 'Sean Connery' };
        let comments = this.state.comments.slice(); //copy the comments array
        if (newComment.text.length > 0) {
            comments.push(newComment);
            this.setState({ comments, comment: '' });
            setTimeout(() => {
                this.setComments();
            }, 500);
        }
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment, index) => {
                    return <p key={index} className="comment"><span className="bold-text">{comment.username}</span> {comment.text}</p>
                })}
                <hr />
                <form onSubmit={this.commentSubmitHandler}>
                    <input onChange={this.commentTextHandler}
                        className='comment-input'
                        type="text"
                        placeholder="..add new comment"
                        value={this.state.comment} />
                </form>
            </div>
        )
    }
}

CommentSection.propTypes = PropTypes.arrayOf(PropTypes.string.isRequired).isRequired;

export default CommentSection;