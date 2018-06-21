import React from "react";
//import "./Posts.css";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Postheader = styled.div`
display: flex;
`;
const PostThumbWrapper = styled.div`
height: 50px;
width: 50px;
`;

const PostThumb = styled.img`
height: 100%;
border-radius: 50%;
`;

const PostHeader = props => {
  return (
    <Postheader>
      <PostThumbWrapper>
        <PostThumb
          alt="post header"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <div>{props.username}</div>
    </Postheader>
  );
};

PostHeader.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string
};

export default PostHeader;
