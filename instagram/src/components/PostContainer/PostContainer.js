import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  Heart as IconHeart,
  MessageCircle as IconMessageCircle
} from "react-feather";
import moment from "moment";
import CommentSection from "../CommentSection/CommentSection";
import NewCommentForm from "../CommentSection/NewCommentForm";

/***************************************************************************************************
 ********************************************** Styles *********************************************
 ***************************************************************************************************/
const DivPostContent = styled.div`
  width: 400px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #f5f5f5; /* Color = Wild Sand: http://chir.ag/projects/name-that-color/#F5F5F5 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const DivPostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 95%;
`;

const ImgPostHeaderThumbnail = styled.img`
  width: 10%;
  height: 10%;
  margin-right: 10px;
  border-radius: 50%;
`;

const H2PostHeaderTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const SpanPostHeaderTimestamp = styled.span`
  color: gray;
  font-size: 9px;
`;

const ImgPostPicture = styled.img`
  width: 90%;
`;

const DivPostIconsContainer = styled.div`
  width: 80%;
  margin-top: 20px;
`;

const H4PostLikes = styled.h4`
  width: 80%;
  font-size: 14px;
  margin: 5px 0 40px 0;
`;

const PostIcons = {
  marginRight: "20px",
  cursor: "pointer",

  WebkitTouchCallout: "none",
  WebkitUserSelect: "none",
  KhtmlUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none"
};

const PostIconsFlipped = {
  transform: "scaleX(-1)",
  MozTransform: "scaleX(-1)",
  WebkitTransform: "scaleX(-1)",
  msTransform: "scaleX(-1)"
};

/***************************************************************************************************
 ********************************************* Component *******************************************
 ***************************************************************************************************/
const PostContainer = props => {
  console.log(props);
  return (
    <div>
      <DivPostContent>
        <DivPostHeader>
          <ImgPostHeaderThumbnail src={props.post.thumbnailUrl} alt="" />
          <H2PostHeaderTitle>
            {props.post.username}{" "}
            <SpanPostHeaderTimestamp>
              {moment(
                props.post.timestamp,
                "MMMM Do YYYY hh:mm:ss A"
              ).fromNow()}
            </SpanPostHeaderTimestamp>
          </H2PostHeaderTitle>
        </DivPostHeader>
        <ImgPostPicture src={props.post.imageUrl} alt="" />
        <DivPostIconsContainer>
          <IconHeart
            style={PostIcons}
            onClick={event => {
              props.incrementLikes(event, props.post.username);
            }}
          />
          <IconMessageCircle
            style={Object.assign({}, PostIcons, PostIconsFlipped)}
          />
        </DivPostIconsContainer>
        <H4PostLikes>{props.post.likes} likes</H4PostLikes>
        {props.post.comments.map(comment => (
          <CommentSection key={comment.timestamp} comment={comment} />
        ))}
        <NewCommentForm
          postUsr={props.post.username}
          handleChange={props.handleChange}
          addNewComment={props.addNewComment}
        />
      </DivPostContent>
    </div>
  );
};

PostContainer.propTypes = {
  "get key": PropTypes.func,
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        timestamp: PropTypes.string,
        text: PropTypes.string
      })
    )
  }),
  addNewComment: PropTypes.func,
  handleChange: PropTypes.func,
  incrementLikes: PropTypes.func
};

export default PostContainer;
