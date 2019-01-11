import React from 'react';
import styled from 'styled-components';

const  Container = styled.div`
 margin: 0 auto;
  max-width: 600px;
  background-color: white;
  border: 1px solid black;
`
const PostHeader = props => {
  	    return (
            <Container>
               <img class="userThumbnail" src={props.thumbnail} />
               <p class="commentUser">{props.username}</p>
            </Container>
          )}
export default PostHeader;
