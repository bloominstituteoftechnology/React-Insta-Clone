import React from "react";
import PropTypes from "prop-types";
import CommentBox from "./commentbox";
import "./comment.css";

//comments component maps over the comment array and passes that data to comment component
class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: this.props.text,
            comments: this.props.comment,
        }
    }
  /*adds comment to any post
  if the username of the current post matches the comment box we are adding the comment to, the new comment is pushed as an addition to the comment section. Otherwise the orginal post is returned
  */
  addNewComment = () => {
    let data = {
      username: "hotdamnirock",
      text: this.props.text,
    }
    this.setState({
      input: "",
      comment: this.state.comments.push(data),
    })
  }
    render() {
        return (
            <>
                <div className="images">
                    <i className="far fa-heart fa-2x" onClick={() =>
                    {
                        this.props.increment(this.props.postId)
                    }}></i>
                    <i className="far fa-comment fa-2x"></i>
                </div>
                <div className="username">{this.props.likes} likes</div>
                {this.state.comments.map((comment, index) => {
                    return (
                    <div className="comment-text" key={comment.text}>
                        <span className="username">{comment.username}</span>{comment.text}
                    </div>
                    )
                })}
                <div className="timestamp">
                    {this.props.time}
                </div>
                <CommentBox 
                    text={this.state.text}
                    input={this.props.input}
                    add={this.addNewComment}
                />
            </>
        )
    }
}

Comments.propTypes = {
    likes: PropTypes.number,
    comment: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired
}

export default Comments;