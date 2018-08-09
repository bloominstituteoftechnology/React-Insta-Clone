import React from "react";
import Posts from "./Posts.js"
import styled from 'styled-components';

const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  border: solid purple 10px;
  height: 100%;
  width: 40%;
  min-width: 300px;
  margin: 5px auto;
`;

const PostsDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid #E6E6E6 1px;
border-radius: 3px;
width: 604px;
margin: 10px 0;
box-shadow: 5px 5px 5px grey;
`
  

const PostContainer = (props) => {
    return (
        <ContainerDiv>
            {props.posts.map((postcontent, i) => {
                return <PostsDiv>
                    <Posts key={i} posts={postcontent}/>
                </PostsDiv>
            })}
        </ContainerDiv>
    )
}

export default PostContainer;