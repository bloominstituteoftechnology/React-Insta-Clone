import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
  const post = props.insta;
  return (
    <div className="carDiv">
      <Card className="cardClass">
        <CardBody className="cardHeader">
          <CardTitle className="profileImg">
            <img src={post.thumbnailUrl} alt="User Profile" /> {post.username}
          </CardTitle>
        </CardBody>
        <div className="instaImg">
          <img width="100%" src={post.imageUrl} alt="Instagram" />
        </div>
        <CardBody>
          <CardText className="likes">
            <div>
              <i className="far fa-heart fa-2x likeHeart" />
              <i className="far fa-comment fa-2x likeComment" />
              <CardTitle>
                <div className="likesAmt">{post.likes} likes</div>
              </CardTitle>
            </div>
          </CardText>
          <div>
            <CommentSection key={post.username} words={post.comments} />
          </div>
          <div className="timeS">{post.timestamp}</div>
          <div className="footer">
            <form action="">
              <input type="text" placeholder="Add a comment..." />
            </form>
            <i className="fas fa-ellipsis-h" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

PostContainer.propTypes = {
  insta: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
  })
};

export default PostContainer;