import React from 'react';
import { CardTitle } from 'reactstrap';
import { StyledPostHeader, StyledThumbNailImage } from '../Styles/Styles';
import './postheader.css';

const PostHeader = props => {
  const { username, thumbnailUrl } = props;
  return (
    <StyledPostHeader>
      <StyledThumbNailImage>
        <img src={thumbnailUrl} alt="user profile" />
      </StyledThumbNailImage>
      <CardTitle className="postHeaderTitle">{username}</CardTitle>
    </StyledPostHeader>
  );
};

export default PostHeader;

{
  /* Original */
}
{
  /* <div className="postHeader">
  <div className="thumbNailImage">
    <img src={thumbnailUrl} alt="user profile" />
  </div>
  <CardTitle className="postHeaderTitle">{username}</CardTitle>
</div> */
}
