import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection'

const Post = props => {    
      return (
    //   Post header

      <div className="post-border" key={props.post.id}>
        <div className="post-container">
          <div className="post-header">
            <div className="thumbnail-container">
              <img className="thumbnail-img" src={props.post.thumbnailUrl} />
            </div>
            <div className="user-name">{props.post.username}</div>
          </div>
          
          <div className="post-content">
            <img className="post-img" src={props.post.imageUrl} />
            <div className="post-likes">{props.post.likes} likes</div>
          </div>

          <div className="post-comments">
            <CommentSection comments={props.post.comments}/>
          </div>
        </div>
      </div> 
    );
};

Post.propTypes = {
    id: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
}

export default Post;