import React from 'react';
import styled from'styled-components';

const Postheader = styled.div`
  display: flex;
  padding-bottom: 20px;
`

const Img = styled.img`
  display: flex;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`
const Username = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
  font-weight: bold;
`

const PostHeader = props => {
    return (
        <Postheader className="post-header">
          <div className="post-thumb-wrapper">
            <Img
              alt="post header"
              className="post-thumb"
              src={props.thumbnailUrl}
            />
          </div>
          <Username className = 'userName'>{props.username}</Username>
      </Postheader>
    );
  };
  
  export default PostHeader;
  