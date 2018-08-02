import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import moment from "moment";
import PostHeader from "./PostHeader";
import IconContainer from "./IconContainer";
import CommentEnterField from "./CommentEnterField";
import Post from "./Post";
import PostImageContainer from "./PostImageContainer";
import Likes from "./Likes";
import TimeStamp from "./TimeStamp";
import CommentBar from "./CommentBar";

const PostContainer = props => {
  return (
    <Post>
      <PostHeader
        userdisplay={props.data.username}
        thumbnail={props.data.thumbnailUrl}
      />
      <PostImageContainer imgS={props.data.imageUrl} />
      <IconContainer id={props.id} method={props.methods[1]} />
      <Likes>{props.data.likes} likes</Likes>
      <CommentSection
        methods={props.methods[2].bind(this)}
        data={props.data.comments}
      />
      <TimeStamp>
        {moment(props.data.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
      </TimeStamp>
      <CommentBar />
      <CommentEnterField id={props.id} method={props.methods[0]} />
    </Post>
  );
};
PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  })
};

export default PostContainer;
