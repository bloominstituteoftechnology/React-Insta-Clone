import React from "react";
import PropTypes from 'prop-types';
import CommentSection from "../CommentSection/CommentSection";
import styled from 'styled-components';
//This will contain the post, including images, content, and comments

const PostContainer = props => {
const PostStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 1rem;
`;
const PostHeader = styled.div`
  display: flex;
  height: 8rem;
  padding: 1rem;
  border: 1px solid darkgray;
  `;
  const PostUser = styled.h2`
    display: flex;
    padding: 1rem;
    `;
    const RoundImage = styled.img`
    display: flex;
    border-radius: 10rem;
    `;
  return (
    <PostStyle>
      <PostHeader>
        <RoundImage src={props.thumbnailUrl}
          alt="Thumbnail"
         />
        <PostUser>{props.username}</PostUser>
      </PostHeader>
      <img src={props.imageUrl}
        alt="Post"
         />
      <CommentSection
        likes={props.likes}
        comments={props.comments}


      />
    </PostStyle>
  );

};

PostContainer.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  })),
  username: PropTypes.string,
  imageUrl: PropTypes.string
}

export default PostContainer;
