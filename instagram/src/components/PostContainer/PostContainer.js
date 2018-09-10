import React from "react";
import '../../index.css';
import './PostContainer.css';
import styled, { css } from 'styled-components';

import CommentSection from "../CommentSection/CommentSection";
import Post from "./Post";
import InteractPost from "./InteractPost";

const WrapperPost = styled.div`
  margin-top: 40px;
  border: 1px solid lightgray;
  border-radius: 3px;
  box-shadow: 0px 0px 4px 2px lightgrey;

  ${props => props.index === 0 ? css`
      margin-top: 90px;
    ` : null}
`;

const CommentWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

const PostContainer = props => {
  const datePost = new Date();
  return(
    <div>
      {props.posts.filter(post => {
        return post.username.toLowerCase().includes(props.searchTerm.toLowerCase());
      }).map((post, index) => {
        return (
          <WrapperPost className="container" key={post.timestamp} index={index}>
            <Post 
              post={post}
                
            />
            <CommentWrapper>
              <InteractPost 
                post={post}
                clickHeart={props.clickHeart}
                interactIndex={index}
                  
              />
              <CommentSection 
                comments={post.comments} 
                post = {post}
                addNewComment={props.addNewComment}
                postIndex={index}
              />
            </CommentWrapper>
          </WrapperPost>
        )
      })}
    </div>
  )
}

export default PostContainer;