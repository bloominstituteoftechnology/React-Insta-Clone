import React from "react";
import PropTypes from 'prop-types';
import PostContainer from "./PostContainer";
import styled from 'styled-components'

//this component will receive data from the state and feed it into
//Post container

const PostList = props => {
  const PostsStyling = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 1rem auto;
    max-width: 800px;
  `;
  return (
    <PostsStyling>
      {props.postData.map((post, index) => (
        <PostContainer
        key={index}
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
        imageUrl={post.imageUrl}
        comments={post.comments}
        likes={post.likes}

         />
      )
    )}
    </PostsStyling>
  );
};

PostList.propTypes = {
  postData: PropTypes.array,
  comments: PropTypes.array
}

export default PostList;
