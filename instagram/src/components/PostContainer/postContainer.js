import React from "react";
import Post from "./Post";
import sc from 'styled-components';

const PostContainerDiv = sc.div`
  height: 50%;
  width: 33%;
  min-width: 400px;
  margin: 5px auto;
`;


const PostContainer = props => {
    return (
        <PostContainerDiv> 
               
        {props.posts.map(p =>
            <Post 
                key={p.imageUrl} 
                post={p}
                 /> )}
        </PostContainerDiv>
        
    );
}

export default PostContainer;