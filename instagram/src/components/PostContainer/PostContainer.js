import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import NewCommentForm from '../CommentSection/NewCommentForm';
import { Heart as IconHeart, MessageCircle as IconMessageCircle } from 'react-feather';
import moment from 'moment';
import styled from "styled-components";

/***************************************************************************************************
********************************************** Styles **********************************************
***************************************************************************************************/
const DivPostContent = styled.div`
  width: 400px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #F5F5F5; /* Color = Wild Sand: http://chir.ag/projects/name-that-color/#F5F5F5 */
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
  color:gray;
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
    marginRight: '20px',
    cursor: 'pointer',

    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
      KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
          msUserSelect: 'none',
            userSelect: 'none'
}

const PostIconsFlipped = {
  transform: 'scaleX(-1)',
  MozTransform: 'scaleX(-1)',
  WebkitTransform: 'scaleX(-1)',
  msTransform: 'scaleX(-1)'
}

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
const PostContainer = props => {
  return (
    <div>
      <DivPostContent>
        <DivPostHeader>
          <ImgPostHeaderThumbnail src={props.postContainer.thumbnailUrl} alt="" />
          <H2PostHeaderTitle>{props.postContainer.username} <SpanPostHeaderTimestamp>{moment(props.postContainer.timestamp, 'MMMM Do YYYY hh:mm:ss A').fromNow()}</SpanPostHeaderTimestamp></H2PostHeaderTitle>
        </DivPostHeader>
        <ImgPostPicture src={props.postContainer.imageUrl} alt="" />
        <DivPostIconsContainer>
          <IconHeart style={PostIcons} onClick={event => {props.incrementLikes(event, props.postContainer.username)}} />
          <IconMessageCircle style={Object.assign({}, PostIcons, PostIconsFlipped)} />
        </DivPostIconsContainer>
        <H4PostLikes>{props.postContainer.likes} likes</H4PostLikes>
        {props.postContainer.comments.map(comment => (
          <CommentSection key={comment.timestamp} comment={comment} />
        ))}
        <NewCommentForm
          postUsr={props.postContainer.username}
          handleChange={props.handleChange}
          addNewComment={props.addNewComment}
        />
      </DivPostContent>
    </div>
  );
}

PostContainer.propTypes = {
  postContainer: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
}

export default PostContainer