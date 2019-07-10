import React, { useState, useEffect } from "react";
import pt from "prop-types";
import uuidv4 from "uuid/v4";
import moment from "moment";
import faker from "faker";
import styled from "styled-components";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import CommentSection from "../CommentSection/CommentSection";
import Form from "../Form/Form";

const PostContainerStyle = styled.section`
  ${props => (props.display === "on" ? `display: flex;` : `display: none;`)};
  flex-direction: column;
  width: 50%;
  margin: 5rem auto;
  border: 1px solid lightgray;
  overflow: hidden;
`;

const UserThumbnail = styled.img`
  border-radius: 50%;
  height: 2rem;
  padding: 1rem;
`;
const UserDeets = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  vertical-align: middle;
  border: 0.5px solid lightgrey;
  border-radius: 0.2rem;
  font-weight: bold;
`;

const UserPostArea = styled.div`
  width: 100%;
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  overflow: hidden;
`;

const Reaction = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: bold;
  padding: 1rem;
`;

const PostIcons = styled.div`
  font-size: 1.5rem;
`;

const TimeStamp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: gray;
  margin: 0 0.5rem;
  padding: 1rem;
  border-bottom: 1px solid lightgrey;
`;

const PostContainer = ({ props }) => {
  const {
    postId,
    comments,
    thumbnailUrl,
    imageUrl,
    timestamp,
    likes,
    username,
    show,
    liked
  } = props;
  const commentDate = timestamp.replace(/th/, "");
  const [inputValue, setInputValue] = useState("");
  const [inputComment, setInputComment] = useState(comments);
  const [createdAt, setCreatedAt] = useState(
    moment(new Date(commentDate), "MMM D LTS").fromNow()
  );

  const [addLikes, updateLikes] = useState(likes);

  const [LikeStatus, setLikeStatus] = useState(liked);

  useEffect(() => {
    const post = JSON.parse(localStorage.getItem("posts"));
    const postUpdate = post.map(userPost => {
      if (postId === userPost.postId) {
        return {
          ...userPost,
          comments: inputComment,
          timestamp: `${moment(new Date(), "MMM D LTS")}`,
          likes: addLikes,
          liked: LikeStatus
        };
      }
      return userPost;
    });
    localStorage.setItem("posts", JSON.stringify(postUpdate));
  }, [inputComment, postId, createdAt, addLikes, LikeStatus]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };
  const postComment = e => {
    e.preventDefault();
    const newComment = {
      postId: postId,
      id: uuidv4(),
      username: faker.name.findName(),
      text: inputValue
    };
    setInputComment([...inputComment, newComment]);
    setInputValue("");
    setCreatedAt(moment(new Date(), "MMM D LTS").fromNow());
  };
  const handleLikes = async () => {
    if (!LikeStatus) {
      setLikeStatus(true);
      updateLikes(likes => (likes += 1));
    } else if (LikeStatus) {
      setLikeStatus(false);
      updateLikes(likes => (likes -= 1));
    }
  };

  return (
    <PostContainerStyle display={show}>
      <UserDeets>
        <UserThumbnail src={thumbnailUrl} alt="user-profile" />
        <p>{username}</p>
      </UserDeets>
      <UserPostArea>
        <PostImage src={imageUrl} alt="user-post" />
      </UserPostArea>
      <Reaction>
        <PostIcons>
          <span
            onClick={() => handleLikes()}
            style={{ color: LikeStatus ? "red" : "" }}
          >
            <IoIosHeartEmpty />
          </span>

          <span>
            <FaRegComment />
          </span>
        </PostIcons>
        {addLikes} likes
      </Reaction>
      {inputComment.map(comment => {
        return <CommentSection key={comment.id} props={comment} />;
      })}
      <TimeStamp>{createdAt}</TimeStamp>
      <Form
        inputValue={inputValue}
        changeHandler={handleChange}
        addComment={postComment}
      />
    </PostContainerStyle>
  );
};

export default PostContainer;

PostContainer.propTypes = {
  props: pt.shape({
    comments: pt.arrayOf(
      pt.shape({
        id: pt.string.isRequired,
        username: pt.string.isRequired,
        text: pt.string.isRequired
      })
    ),
    thumbnailUrl: pt.string.isRequired,
    imageUrl: pt.string.isRequired,
    timestamp: pt.string.isRequired,
    likes: pt.number.isRequired,
    username: pt.string.isRequired
  }).isRequired
};
