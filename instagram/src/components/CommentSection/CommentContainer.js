import React, { Component } from 'react';
import Comment from './Comment';
import shortid from 'shortid';
import './CommentContainer.sass';

class CommentContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            likes: props.likes,
            comments: props.comments,
            index: props.index,
            commentInput: ''
        };
    }
    addNewComment = (event, index) => {
        console.log(event);
        this.setState({
            comments: [...this.state.comments, { username: 'testingUser', text: event.target[0].value }]
        });
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        return (
            <div className="comment-container">
                <div className="comment--social-icons">
                    <div className="icon-heart">
                        <span />
                    </div>
                    <div className="icon-comment">
                        <span />
                    </div>
                    <div className="icon-share">
                        <span />
                    </div>
                    <div className="icon-bookmark">
                        <span />
                    </div>
                </div>
                <p>{this.state.likes}</p>
                {this.state.comments.map(comment => (
                    <Comment comment={comment} key={shortid.generate()} />
                ))}
                <form
                    onSubmit={(event, index) => {
                        event.preventDefault();
                        this.setState({
                            commentInput: ''
                        });
                        this.addNewComment(event, index);
                    }}
                >
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        name="commentInput"
                        value={this.state.commentInput}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

export default CommentContainer;
