import React from 'react'; 
import CommentSection from '../CommentSection/CommentSection'; 
import PropTypes from 'prop-types';

import './PostContainer.css'

const Post = props => {
    return(
        <div className="postWrapper">
            
          <div className="postHeader">
                <img className="thumbnail" src={props.post.thumbnailUrl}/>

                <p className="postUsername">{props.post.username}</p>
          </div>

          <img className="postImage" src= {props.post.imageUrl} />
            
          <div className="engagement">

            <div className="engagementIcons">
              <i class="far fa-heart"> </i>
              <i class="far fa-comment"></i>
            </div>

            <p className="likesNumber">{props.post.likes} likes </p>

          </div>

          <div className="comments">
            <CommentSection comments={props.post.comments}/>
          </div>

        </div>
    );
}; 

Post.propTypes = {
    post: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number,
        timestamp: PropTypes.string, 
        comments: PropTypes.arrayOf(
            PropTypes.shape({
              username: PropTypes.string.isRequired,
              text: PropTypes.string.isRequired
            })
          ).isRequired
      })
    ).isRequired
  };
  
  // Just in case we haven't gotten data back, going to do a default prop array
  Post.defaultProps = {
    post: []
  };

export default Post; 