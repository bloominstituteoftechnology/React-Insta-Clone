import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";
import Comments from "../CommentSection/Comments";
import CommentInput from "../CommentSection/CommentInput";
import styled from "styled-components";

const UserNameDiv = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.5rem 0 0.7rem;
`;
const UserNameImg = styled.img`
  height: 2rem;
  width: auto;
  border-radius: 25px;
  margin-right: 1rem;
`;

const UserNameH2 = styled.h2`
  font-size: 1rem;
`;

const CommentImg = styled.img`
  width: 100%;
  height: auto;
`;

const FaPostDiv = styled.div`
  font-size: 1.3rem;
  width: 100%;
  text-align: start;
`;

const CommentLikes = styled.h4`
  padding: 0 0.5rem 0.2rem 1rem;
  font-size: 1rem;
`;
const ListOfCommentsDiv = styled.div``;
const TimeStampH4 = styled.h4`
  font-size: 0.75rem !important;
  color: #aa9999;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 1px solid lightgray;
  padding: 0 0.5rem 0.2rem 0.3rem;
  margin-bottom: 0 !important;
  margin-top: 0.5rem;
`;
const CommentDiv = styled.div`
  width: 100%;
  text-align: start;
  margin-top: 1.5rem;
  box-shadow: 0 0 30px -10px #777;
  border-radius: 4px;
`;
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    let postDate = props.comment.timestamp.split(",")[0];
    postDate = postDate.replace("th", "").split(" ");
    postDate = postDate[1] + " " + postDate[0] + " " + postDate[2];
    postDate = new Date(postDate).getTime();
    let dateNow = Date.now();
    this.timeSince = Math.ceil((dateNow - postDate) / (1000 * 3600 * 24));

    this.state = {
      comment: props.comment,
      comments: props.comment.comments,
      imageUrl: props.comment.imageUrl,
      likes: props.comment.likes,
      filteredComments: [],
      timeSince: props.timeSince
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let resetFormsVar = document.querySelectorAll(".commentTodoForm");
    for (let i = 0; i < resetFormsVar.length; i++) {
      resetFormsVar[i].reset();
    }
    let arrayOfComments = this.state.comments.slice();
    arrayOfComments.push({
      username: "Frank",
      text: this.state.text
    });
    this.setState({
      comments: arrayOfComments
    });
  };

  handleInputChange = event => {
    // update the message field on state.
    this.setState({ text: event.target.value });
  };

  handleLike = () => {
    let likesTotal = this.state.likes + (this.state.liked ? -1 : 1);
    this.setState({
      likes: likesTotal,
      liked: !this.state.liked
    });
  };

  render() {
    return (
      <CommentDiv className="commentDiv">
        <UserNameDiv className="userNameDiv">
          <UserNameImg
            src={this.state.comment.thumbnailUrl}
            alt="thumbnail of username"
          />
          <UserNameH2>{this.state.comment.username}</UserNameH2>
        </UserNameDiv>

        <CommentImg
          src={this.state.comment.imageUrl}
          className="commentImg"
          alt="subject in post"
        />

        <FaPostDiv className="faPostDiv">
          <i className="fa fa-heart-o" onClick={this.handleLike} />
          <i className="fa fa-comment-o fa-flip-horizontal" />
        </FaPostDiv>
        <CommentLikes>{this.state.likes} likes</CommentLikes>
        <ListOfCommentsDiv className="listOfCommentsDiv">
          {this.state.comments.map(comment => <Comments comment={comment} />)}
        </ListOfCommentsDiv>
        {/* <h4 className="timeStamp">{this.state.comment.timestamp} DAYS AGO</h4> */}
        <TimeStampH4 className="timeStamp">
          {this.timeSince} DAYS AGO
        </TimeStampH4>
        <CommentInput
          handleSubmit={this.handleSubmit}
          comments={this.state.comment.comments}
          handleInputChange={this.handleInputChange}
        />
      </CommentDiv>
    );
  }
}

CommentSection.propTypes = {
  comment: PropTypes.object
};

export default CommentSection;
