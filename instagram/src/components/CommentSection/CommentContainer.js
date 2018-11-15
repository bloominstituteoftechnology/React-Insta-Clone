import React, { Component } from 'react';
import Comment from './Comment';
import shortid from 'shortid';
import './CommentContainer.sass';

class CommentContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            likes        : props.likes,
            comments     : props.comments,
            index        : props.index,
            commentInput : '',
            liked        : false
        };
    }
    addNewComment = (event) => {
        this.setState({
            comments : [
                ...this.state.comments,
                { username: 'testingUser', text: event.target[0].value }
            ]
        });
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    likeHandler = (event) => {
        if (this.state.liked) {
            this.setState({ ...this.state, liked: false, likes: this.state.likes - 1 });
        } else {
            this.setState({ ...this.state, liked: true, likes: this.state.likes + 1 });
        }
    };
    render() {
        return (
            <div className="comment-container">
                <div className="comment--social-icons">
                    <div
                        className="icon-heart"
                        onClick={() => {
                            this.likeHandler();
                        }}>
                        {this.state.liked ? <span className="liked" /> : <span />}
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
                {this.state.comments.map((comment) => <Comment comment={comment} key={shortid.generate()} />)}
                <form
                    onSubmit={(event, index) => {
                        this.setState({
                            commentInput : ''
                        });
                        this.addNewComment(event, index);
                    }}>
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
