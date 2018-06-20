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

    commentTextHandler = e => {
        this.setState({comment: e.target.value})
    }

    commentSubmitHandler = e => {
        e.preventDefault();
        alert('new comment')
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