import React from 'react'; 
import CommentSection from '../CommentSection/CommentSection'; 
import PropTypes from 'prop-types';

const Post = props => {
    return(
        <div className="postWrapper">
            
            <div ClassName="postheader">
                <img className="thumbnail" src={props.post.thumbnailUrl}/>

                <p>{props.post.username}</p>
            </div>

            <img src= {props.post.imageUrl} />
            
            <div className="engagement">
            <p>{props.post.likes} likes </p>
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