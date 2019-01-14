import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./CommentSection.css";
import { FiHeart, FiMessageCircle, FiSend } from "react-icons/fi";
import TimePosted from "./TimePosted";
import { Input } from "reactstrap";

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Likes = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const CommentsField = styled.div`
  p {
    font-size: 1.4rem;

    span {
      font-weight: bold;
      font-size: 1.4rem;
      margin-right: 1%;
    }
  }
`;

const CommentInput = styled(Input)`
  width: 99%;
  margin-top: 7px;
  font-size: 1.4rem;
`;

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      addComment: "" /*Buffer for input field*/,
      likes: 0
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.data.comments,
      likes: this.props.data.likes
    });
  }

  /* Takes user input in comment field into state */
  onChangeHandler = event => {
    this.setState({
      addComment: event.target.value
    });
  };

  /* Adds comment to this.state.comments, resets input field */
  addNewComment = event => {
    event.preventDefault();
    const currentComments = this.state.comments;
    console.log(currentComments);
    currentComments.push({
      username: this.props.user,
      text: this.state.addComment
    });
    return this.setState({
      comments: currentComments,
      addComment: ""
    });
  };

  /* Add Likes */
  addLikeHandler = event => {
    this.setState((prevState, props) => {
      return {
        likes: prevState.likes + 1
      };
    });
  };

  render() {
    return (
      <CommentContainer>
        <div className={"icon-container"}>
          <FiHeart className={"icon like"} onClick={this.addLikeHandler} />
          <FiMessageCircle className={"icon"} />
          <FiSend className={"icon"} />
        </div>
        <Likes>{this.state.likes} likes</Likes>
        {this.props.data.comments.map((comments, index) => {
          return (
            <CommentsField key={comments.text}>
              <p>
                <span>{comments.username}</span>
                {comments.text}
              </p>
            </CommentsField>
          );
        })}
        <TimePosted
          className={"timestamp"}
          timestamp={this.props.data.timestamp}
        />
        <form onSubmit={this.addNewComment}>
          <CommentInput
            onChange={this.onChangeHandler}
            className={"comment-input"}
            placeholder={"Add comment..."}
            value={this.state.addComment}
          />
        </form>
      </CommentContainer>
    );
  }
}

CommentSection.propTypes = {
  data: PropTypes.shape({
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  }),
  user: PropTypes.string
};

export default CommentSection;
