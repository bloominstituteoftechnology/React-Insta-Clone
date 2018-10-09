import React from 'react';
import propTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';
import PostHeader from '../PostHeader/PostHeader';

import { Card, CardImg } from 'reactstrap';

import '../PostContainer/postcontainer.css';

const PostContainer = props => {
  const {
    comments,
    imageUrl,
    username,
    likes,
    thumbnailUrl,
    timestamp
  } = props.postInfo;
  return (
    <div className="post">
      <Card className="customCard">
        <PostHeader username={username} thumbnailUrl={thumbnailUrl} />
        <CardImg src={imageUrl} alt="post" className="cardImg" />
        {/* <PostInteraction likes={likes} /> */}
        <CommentSection
          comments={comments}
          likes={likes}
          timestamp={timestamp}
        />
      </Card>
    </div>
  );
};

PostContainer.propTypes = {
  postInfo: propTypes.object.isRequired
};

export default PostContainer;
