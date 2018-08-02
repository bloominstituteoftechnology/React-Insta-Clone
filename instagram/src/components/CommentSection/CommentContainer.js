import React, { Component } from "react";
// import "./Comment.css";
import Comment from "./Comment";
import styled from "styled-components";

const CommentContain = styled.div`
  margin: 10px 10px;
`;

const Iconic = styled.div`
  display: flex;
`;

const Ico = styled.div`
  font-size: 20px;
  .fas {
    color: red;
  }
  .fab {
    margin: 0 0 0 10px;
  }
`;

const Commentbox = styled.input`
  width: 90%;
  height: 50px;
  font-size: 16px;
`;

const Like = styled.div`
  font-weight: bold;
`;

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.fred.comments,
      input: "",
      likes: props.fred.likes,
      time: props.fred.timestamp,
      liked: false
    };
  }

  likeToggle = () => {
    let likesCopy = this.state.likes;
    if (this.state.liked === false) {
      likesCopy++;
      this.setState({ likes: likesCopy, liked: true });
    } else {
      likesCopy--;
      this.setState({ likes: likesCopy, liked: false });
    }
  };

  addNewComment = event => {
    if (event.key === "Enter") {
      const commentSlice = this.state.comments.slice();
      commentSlice.push({
        username: "naazzzzzzzz",
        text: this.state.input
      });

      this.setState({ comments: commentSlice });
      this.setState({ input: "" });
    }
  };

  saveComment = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <CommentContain>
        <Iconic>
          <Ico
            className={this.state.liked ? "fas fa-heart" : "far fa-heart"}
            onClick={this.likeToggle}
          />
          <Ico className="fab far fa-comment" />
        </Iconic>
        <Like>{this.state.likes} likes </Like>

        {this.state.comments.map(item => <Comment eye={item} />)}
        <div className="time"> {this.state.timestamp} </div>
        <Commentbox
          value={this.state.input}
          onChange={this.saveComment}
          onKeyPress={this.addNewComment}
          placeholder="Add a comment..."
        />
        <i className="fa fa-ellipsis-h" aria-hidden="true" />
      </CommentContain>
    );
  }
}
export default CommentContainer;
