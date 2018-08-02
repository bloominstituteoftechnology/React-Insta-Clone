import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js'
import PropTypes from 'prop-types';
//import Moment from 'react-moment';

const PostContainer = props => {
  return (
    <div>
      
      {props.data.map(post => {
        return (
          <div className="PostContainer"
            // username={post.username}
            // avatar={post.thumbnailUrl}
            // image={post.imageUrl}
            // likes={post.likes}
            // timestamp={post.timestamp} 
            >
            <div className="postTop">
              <img className="avatar" src={post.thumbnailUrl} />
              <div className="postUser">{post.username}</div>
            </div>
            <img src={post.imageUrl} />

            <CommentSection com={post} />
            </div>
            )
          })}
    
    </div>
    
    )
  };
  
  
PostContainer.propTypes = {
        data: PropTypes.array
    }
    
export default PostContainer;