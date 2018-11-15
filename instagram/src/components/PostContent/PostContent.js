import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import LikesContainer from "./LikesContainer";
import styled from 'styled-components';
import PropTypes from "prop-types";
 const Container = styled.div`
    width: 64.4%;
    border: 1px solid lightgrey;
    border-radius: 0.5rem;
    margin-top: 2rem;
`;
 const User = styled.div`
    display: flex;
    align-items: center;
    padding:2rem;
    background-color: white;
`;
 const Thumbnail = styled.img`
    border-radius: 50%;
    width: 4rem;
    height: auto;
`;
 const Username = styled.div`
    font-size: 1.2rem;
    margin-left: 1rem;
`;
 const Commentscontainer = styled.div`
    padding-top: 1rem;
    width:94%;
    margin: 0 auto;
    background-color: white;
`;
const PostContent = props => {
  return (
    <Container>
      <User>
        <div className="user-thumbnail">
          <Thumbnail src={props.data.thumbnailUrl} alt="" />
        </div>
        <Username>
          <h2>{props.data.username}</h2>
        </Username>
      </User>
      <div className="main-img">
        <img src={props.data.imageUrl} alt="" />
      </div>
      <Commentscontainer>
        <LikesContainer likes={props.likes} />
        <CommentSection data={props.data} comments={props.comments} />
      </Commentscontainer>
    </Container>
  );
};
 PostContent.propTypes = {
  data: PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};
 export default PostContent;
