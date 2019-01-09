import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


const PostContainer = props => {
    return (  
      <div className="post-container">{props.data.map((d,i) => (
        <div key={i} className="post">
          <div className="user-info">
            <div className="profile-pic">
              <img src={d.thumbnailUrl} alt="" />
            </div>
            <div className="username">{d.username}</div>
          </div>
          <div className="user-post">
            <img src={d.imageUrl} alt="" />
          </div>
          <div className="user-comments">
            <CommentSection comments={d.comments} likes={d.likes} timestamp={d.timestamp}/>
          </div>
        </div>
  ))}
      </div>
  )
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object),
  likes: PropTypes.number,
  timestamp: PropTypes.string
}

export default PostContainer;