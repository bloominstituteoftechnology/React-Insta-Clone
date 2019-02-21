import React from 'react';

import Post from '../Post/Post';

import styled from 'styled-components';

function PostContainer({ search, posts }) {
  return (
    <PostContainer1>
      {posts.map((post, index) => (
        <Post search={search} key={index} post={post} />
      ))}
    </PostContainer1>
  );
}

const PostContainer1 = styled.div`
  width: 60%;

  margin: 30px auto;
`;

export default PostContainer;
