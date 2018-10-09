import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = ({ data, likePost, id }) => {
  return (
    <div className="PostContainer">
      <header className="PostContainer-Header">
        <img src={data.thumbnailUrl} alt="User" />
        {data.username}
      </header>
      <div className="PostContainer-Img-Container">
        <img src={data.imageUrl} alt="Image" />
      </div>
      <div className="PostContainer-Icons">
        <div className="Icon">
          <i
            className={'far fa-heart'}
            onClick={e => likePost(e, id)}
            style={{ color: '#ED4956' }}
          />
        </div>
        <div className="Icon">
          <ion-icon name="chatbubbles" />
        </div>
      </div>
      <div className="PostContainer-Likes">{data.likes} likes</div>
      <CommentSection comments={data.comments} />
    </div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  })
};

export default PostContainer;
