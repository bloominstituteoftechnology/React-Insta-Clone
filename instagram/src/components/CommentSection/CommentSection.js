import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Comment from "./Comment.js";
import Moment from "react-moment";


class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentState: props.com.comments,
            input: "",
            likes: props.com.likes,
            time: props.com.timestamp,
            liked: false
        }
    }

    toggleLike = () => {
        let likesCopy = this.state.likes;
        if (this.state.liked === false ) {
            likesCopy++
            this.setState({likes: likesCopy, liked: true})
        } else {
            likesCopy--;
            this.setState({likes: likesCopy, liked: false})
        }
    }

    addNewComment = (event) => {
        if (event.key === "Enter") {
            const commentSlice = this.state.commentState.slice();
            commentSlice.push({
                username: "NaazButtzZzzNToes",
                text: this.state.input
            });

            this.setState({ commentState: commentSlice });
            this.setState({ input: "" });
        };
    }

    saveComment = (event) => {
        this.setState({ input: event.target.value });
    }

    render() {
        return (
            <div>

                <div className="postBot">
                    <div className="botIcons">
                        <i className={this.state.liked ? "fas fa-heart" : "far fa-heart"} onClick={this.toggleLike}></i>
                        <i className="far fa-comment"></i>
                    </div>
                    <div className="postLikes">{this.state.likes + " likes"} </div>
                </div>



                {this.state.commentState.map(item => <Comment com={item} />)}
                
                <div className="postTimestamp"><Moment>{this.state.time}</Moment></div>
                <input value={this.state.input} onChange={this.saveComment} onKeyPress={this.addNewComment} className="commentInput" placeholder="Add a comment..." />

            </div>

        );
    }
}
CommentSection.propTypes = {
    comments: PropTypes.array
}

export default CommentSection;