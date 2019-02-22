import React from "react";
// import "./PostContainer.css";
import styled from "styled-components";

import CommentContainer from "../CommentSection/CommentContainer";

const PostCard = styled.div`
  display: flex;
  border: 1px solid gray;
  flex-direction: column;
  width: 600px;
  margin-bottom: 20px;
`;

const Cardtitle = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 10px;
`;

const Thumbnail = styled.img`
  border-radius: 100px;
  width: 40px;
  height: 40px;
`;

const Username = styled.div`
  margin-left: 10px;
`;

const Post = prop => {
  return (
    <PostCard>
      <Cardtitle>
        <Thumbnail src={prop.butt.thumbnailUrl} />
        {/* // started here with the flow of props */}
        <Username>{prop.butt.username} </Username>
      </Cardtitle>
      <img className="image" src={prop.butt.imageUrl} />
      <CommentContainer fred={prop.butt} time={prop.timestamp} />
    </PostCard>
  );
};

Post.propTypes = {
  butt: PropTypes.shape({
    username: PropTypes.string,
    thumbnailurl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};

export default Post;
