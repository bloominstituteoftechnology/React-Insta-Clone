import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PostContainer from "./PostContainer";

/***************************************************************************************************
 ********************************************** Styles *********************************************
 ***************************************************************************************************/
const DivPostContainerList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin: 20px 0;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 ***************************************************************************************************/
const PostContainerList = props => {
  return (
    <DivPostContainerList>
      {props.data.map(post => (
        <PostContainer
          key={post.timestamp}
          post={post}
          addNewComment={props.addNewComment}
          handleChange={props.handleChange}
          incrementLikes={props.incrementLikes}
        />
      ))}
    </DivPostContainerList>
  );
};

PostContainerList.propTypes = {
  addNewComment: PropTypes.func,
  handleChange: PropTypes.func,
  incrementLikes: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  )
};

export default PostContainerList;
