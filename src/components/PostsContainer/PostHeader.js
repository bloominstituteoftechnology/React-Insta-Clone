import React from 'react';
import styled from 'styled-components';




const Container = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  height: 50px;
  width: 50px;
`

const PostImg = styled.img`
  height: 100%;
  border-radius: 50%;
`

const User = styled.div`
  height: auto;
  font-weight : 500;
  margin-left : 15px;
`

const PostHeader = props => {
  return (
    <Container>
      <Wrapper>
        <PostImg
          alt="post header"
          src={props.thumbnailUrl}
        />
            </Wrapper>
     <User>
     {props.username} 
     </User>
      
  </Container>

  );
};

export default PostHeader;