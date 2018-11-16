import React from 'react';
import PropTypes from 'prop-types';
import PostContainer from './PostContainer';
import styled from "styled-components";

/***************************************************************************************************
********************************************** Styles **********************************************
***************************************************************************************************/
const DivPostContainerList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin: 20px 0;
`;

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
const PostContainerList = props => {
  return (
  <DivPostContainerList>
    {props.data.map( post => (
      <PostContainer
        key={post.timestamp}
        postContainer={post}
        addNewComment={props.addNewComment}
        handleChange={props.handleChange}
        incrementLikes={props.incrementLikes}
      />
    ))}
  </DivPostContainerList>);
}

PostContainerList.propTypes = {
  data: PropTypes.array.isRequired
}

export default PostContainerList;