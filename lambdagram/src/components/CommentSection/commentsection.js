import React from 'react';
import PropTypes from 'prop-types';
import './commentsection.css';

import Comment from './comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: props.timestamp,
            comments: props.comments,
            commentInput: ''
        }
    }

    handleInput = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleComment = (event) => {
        event.preventDefault();
        if(!event.target.value) {
            this.setState({
                comments: [...this.state.comments, {username: 'Vera', text: this.state.commentInput}],
                commentInput: ''
            });
        }
    }

    render() {
        return (
            <div className='comment-section'>
                {this.state.comments.map( (comment) => {
                    return (
                        <Comment 
                            comment={comment} 
                            key={`${comment.username} - ${Math.round(Math.random() * 10000000000000000)}`} 
                        />
                    );
                })}
                <p>{this.state.timestamp}</p>
                <hr />
                <div className='commenting-stuff'>
                <form 
                    onSubmit={this.handleComment}>
                    <input 
                        className='comment-box' 
                        name='commentInput' 
                        type='text' 
                        placeholder='Add a comment...' 
                        value={this.state.commentInput} 
                        onChange={this.handleInput} 
                        onFocus={this.handleInput} 
                    ></input>
                    </form>
                    <p>...</p>
                </div>
            </div>
        );
    }
}

CommentSection.propTypes = {
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}

export default CommentSection;
