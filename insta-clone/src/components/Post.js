//post
import React from 'react';
import CommentSection from './CommentSection';
import PostHeader from './PostHeader.js';
import Likes from './Likes.js';
import PropTypes from 'prop-types';

//Here, all aspects of the dummyData are combined into one component so that
//they can be properly mapped and styled in the PostContainer. Notice that all
//elements of the array can be referrenced now by the same prop. All instances
//of post are instances of dummyData being passed down from App.js
const Post = props => {
return(  <div>
            <div>
              <PostHeader
              thumbnailUrl={props.post.thumbnailUrl}
              username={props.post.username}
              />
            </div>
            <div>
              <img
                alt="posted picture"
                src={props.post.imageUrl}
                />
            </div>
              <Likes likes={props.post.likes}/>
              <CommentSection comments={props.post.comments}/>
          </div>
);
}

Post.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          username: PropTypes.string
        })
      )
    })
  )
}

Post.defaultProps = {
  dummyData: []
}

export default Post;
