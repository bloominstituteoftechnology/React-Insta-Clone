import React, { Component } from "react";
import { Fragment } from "react";
import CommentSection from "../CommentSection/CommentSection";
import "../PostContainer/PostContainer.css";
import PropTypes from "prop-types";
import styled from "styled-components";





const Header = styled.div`

margin: 20px 0px 20px 30px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 300px;
border: 10px solid red;
`;



const PostContainer = props => {
  return (
    <div className="postContainer">
      {props.data.map(
        post => (
          console.log(post),
          (
            <div className="postBorder" key={post.timestamp}>
              <Header className="header">
                <img className="imgThumbnail" src={post.thumbnailUrl} alt="" />
                <h2>{post.username}</h2>
              </Header>
              <img className="img-main" src={post.imageUrl} alt="" />

              
              <div>{post.likes}</div>

              {post.comments.map(arg => {
                return <CommentSection key={arg.text} coolData={arg} />;
              })}
              <div className="timeStamp">{post.timestamp}</div>

            </div>
          )
        )
      )}
    </div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ timestamp: PropTypes.string, username: PropTypes.string })
  )
};

export default PostContainer;
