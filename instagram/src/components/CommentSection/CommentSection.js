import React, { Component } from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';
import './CommentSection.css';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newComment: '',
            likes: props.likes,
            postLike: false
        };
    }

    inputNewComment = event => {
        this.setState({ newComment: event.target.value });
    }

    addNewComment = (event) => {
        event.preventDefault();
        let commentsList = this.state.comments.slice();
        commentsList.push({ username: 'Guest', text: this.state.newComment });
        this.setState({ comments: commentsList });

    }

    likePost = event => {
        if (!this.state.postLike) {
            let likesNum = this.state.likes;
            likesNum++;
            this.setState({ likes: likesNum, postLike: true });
        } else {
            let likesNum = this.state.likes;
            likesNum--;
            this.setState({ likes: likesNum, postLike: false });
        }
    }
    render() {
        return (
            <div className="commentSection">
                <div className="buttonsContainer">
                    <img onClick={this.likePost} className="likeButton" src="" alt="Like Button" />
                    <img className="commentButton" src="" alt="Comment Button" />
                </div>
                <div className="likesContainer"><p>{this.state.likes}</p></div>
                {this.state.comments.map((comment, index) => {
                    return <Comment username={comment.username} text={comment.text} key={index} />
                })}
                <div className="postDate"><p>2 HOURS AGO</p></div>
                <div className="inputComment">
                    <form onSubmit={this.addNewComment}>
                        <input onChange={this.inputNewComment} type="text" placeholder="Add a comment..." />
                    </form>
                </div>
            </div>
        );
    }
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default CommentSection;