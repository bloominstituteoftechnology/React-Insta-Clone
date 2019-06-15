import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./Post.css";
import Likes from './Likes'
import styled from "styled-components";

const StyledPostcontainer = styled.div`

border: 1px solid gray; 
 width:640px;
 margin: 0 auto;
 
.postwrapper{
    width: 640px;
    margin-left: 0px;
    /* border: 1px solid red; */
    padding-left:-100px;
}

.accountheader{
    display: flex;
    /* border : solid red 1px; */
    width: 25%;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;

}

.accountheader img {
    
    
    width: 60px;
    height:60Px;
    border-radius: 100%;
    margin-right: 10px;
    
   

}

`;
const PostContainer = props => {
 
  return (
    <StyledPostcontainer >
      <div className="postwrapper">

      <span className="accountheader">
        <img  src={props.Data.thumbnailUrl} alt="users" />
        <div>{props.Data.username}</div>
      </span>
        
        <img src={props.Data.imageUrl} alt="posted pic" />
        
        <Likes numberOfLikes={props.Data.likes}/>
        <CommentSection comments={props.Data.comments} />
        {/* <div>{props.Data.timestamp}</div> */}
      </div>
    </StyledPostcontainer>
  );
};

export default PostContainer;


