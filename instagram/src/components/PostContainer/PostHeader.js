import React from "react";
import PropTypes from "prop-types";
import { CardTitle } from "reactstrap";
import { StyledPostHeader, StyledThumbNailImage } from "../Styles/Styles";
import "./postheader.css";

const PostHeader = ({ username, thumbnailUrl }) => {
  return (
    <StyledPostHeader>
      <StyledThumbNailImage>
        <img src={thumbnailUrl} alt="user profile" />
      </StyledThumbNailImage>
      <CardTitle className="postHeaderTitle">{username}</CardTitle>
    </StyledPostHeader>
  );
};

PostHeader.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
};

export default PostHeader;
