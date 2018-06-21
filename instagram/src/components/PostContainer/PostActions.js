import React from 'react';
import styled from 'styled-components';
import ActionAnchor from '../Styles/Reusables/ActionAnchor';

const PostActionsDiv = styled.div`
  margin: 0 0 10px 0;
  padding: 0 15px;
`;

const PostActions = (props) => {
  return(
    <PostActionsDiv>
      <ActionAnchor like href="like" onClick={e => props.addLike(e, props.postIndex)}>Like</ActionAnchor>
      <ActionAnchor comment href="comment">Comment</ActionAnchor>
    </PostActionsDiv>
  );
};

export default PostActions;