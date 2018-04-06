import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
  const post = props.insta;
  return (
    <div className="cardDiv">
      <Card className="cardClass">
        <CardBody className="cardHeader">
          <CardTitle className="philzImg">
            <img src={post.thumbnailUrl} alt="User Profile" /> {post.username}
          </CardTitle>
        </CardBody>
        <div className="instaImg">
          <img width="50%" src={post.imageUrl} alt="Instagram" />
        </div>
        <CardBody>
          <CardText className="likes">
             <div>
              <CardTitle>
                <div className="likesAmt">{post.likes} likes</div>
              </CardTitle>
            </div>
          </CardText>
          <div>
            <CommentSection key={post.username} words={post.comments} />
          </div>
          <div className="timeStamp">{post.timestamp}</div>
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