import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import { Heart, MessageCircle } from "react-feather";
import PropTypes from "prop-types";
import { StyledPost, UserDiv, IconBar, Thumbnail, UserName, TimeStamp, LikeCounter, ContentContainer } from "../Styles.js";
import moment from "moment";

const PostContainer = props => {
    return (
      <div>
        <StyledPost>
          <UserDiv>
            <Thumbnail
              src={props.post.thumbnailUrl}
              alt=""
            />
            <UserName> {props.post.username} </UserName>
          </UserDiv>
          <img src={props.post.imageUrl} alt="" />
          <ContentContainer>
          <IconBar>
            <Heart style={{cursor: 'pointer'}} onClick={() => props.increaseLikes(props.id)} />
            <MessageCircle />
          </IconBar>
          <LikeCounter>{props.post.likes} likes</LikeCounter>
          <CommentSection comments={props.post.comments} username={props.username} id={props.id}/>
          <TimeStamp>{moment(props.post.timestamp, "MMMM Do YYYY, h:mm:ss").fromNow()}</TimeStamp>
          </ContentContainer>
        </StyledPost>
      </div>
    );
  }
// }

PostContainer.propTypes = {
  index: PropTypes.number,
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
  }),
  username: PropTypes.string,
  increaseLikes: PropTypes.func,
}

export default PostContainer;


