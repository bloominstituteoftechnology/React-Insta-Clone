import React, { useState } from "react";
import PropTypes from "prop-types";
import useInput from "../Hooks/useInput";

import Comment from "../CommentSection/Comment";
import PostInteraction from "../PostInteraction/PostInteraction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledCommentSection } from "../Styles/Styles";

import "../CommentSection/commentsection.css";

const CommentSection = ({ likes: numOfLikes, comments: arrOfComments }) => {
  const { value: newComment, changeHandler, clear } = useInput("");
  const [comments, setComments] = useState(arrOfComments);
  const [likes, setLikes] = useState(numOfLikes);

  const addNewCommentHelper = event => {
    event.preventDefault();
    const commentToAdd = {
      text: newComment,
      username: localStorage.getItem("username"),
    };

    setComments([...comments, commentToAdd]);
    clear();
  };

  return (
    <StyledCommentSection className="commentSection">
      <PostInteraction likes={likes} setLikes={setLikes} />
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
      <form
        onSubmit={event => addNewCommentHelper(event)}
        className="commentForm">
        <input
          type="text"
          className="commentAdd"
          placeholder="Add a Comment..."
          onChange={changeHandler}
          name="newComment"
          value={newComment}
          autoComplete="off"
        />
        <FontAwesomeIcon icon="ellipsis-h" className="tripleDot" />
      </form>
    </StyledCommentSection>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  likes: PropTypes.number.isRequired,
};

export default CommentSection;
