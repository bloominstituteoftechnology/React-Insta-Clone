import React from "react";
import Comment from "../Comment/Comment";
import "../CommentSection/CommentSection.css";
import moment from 'moment';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      comments: props.comments,
      likes: props.likes,
    };
    
  }

  // let date = moment(this.props.post.timestamp);

  addComment = event => {

    event.preventDefault();
    this.setState(
      {
        comments: [
          ...this.state.comments,
          { text: this.state.comment, username: "dummyUser" }
        ],
        comment: ""
      },
    );
  };

  commentInput = event => {
    this.setState({
      comment: event.target.value
    });
  };

  addLike = () => {
    let likeCounter = this.state.likes;
    this.setState({
      likes: ++likeCounter,
    });
  }

  render() {
    let date = moment(this.props.post.timestamp, 'MMMM Do YYYY, hh:mm:ss a').format('YYYY-MM-DD HH:mm:ss');
    return (
      <div className={"commentsContainer"}>
        <div className={"buttonBar"}>
          <div className={"commentsButtonBox"}>
            <img src="https://png.icons8.com/ios/48/000000/hearts.png" alt="" onClick={this.addLike} />
            <img
              src="https://png.icons8.com/ios/48/000000/speech-bubble.png"
              className={"commentBubble"}
              alt=""
            />
            <img src="https://png.icons8.com/ios/48/000000/upload.png" alt="" />
          </div>
          <img
            src="https://png.icons8.com/ios/48/000000/bookmark-ribbon.png"
            alt=""
          />
        </div>
        <div className={"likesCount"}>{this.state.likes} likes</div>
        {this.state.comments.map(comment => {
          return (
            <Comment
              key={comment.text}
              comment={comment}
              dummyData={this.props.dummyData}
            />
          );
        })}
        <div className={"dateStamp"}>{moment(date).fromNow()}</div>
        <form>
          <div className={"moreButton"} />
          <input
            value={this.state.comment}
            className={"commentInput"}
            placeholder={"Add a comment..."}
            onChange={this.commentInput}
          />
          <button
            className={"invisible"}
            type="submit"
            onClick={this.addComment}
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
