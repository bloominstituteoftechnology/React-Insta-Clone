import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types'
import Header from './Header';
import Body from './Body';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = (props) =>{
    return(
        <div className="post-container">
            <Header  thumbnail={props.obj.thumbnailUrl} username={props.obj.username}/>
            <Body postPic={props.obj.imageUrl} />
            <CommentSection comArray={props.obj.comments} likes={props.obj.likes}/>
        </div>
    );
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
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
  )
}

export default PostContainer;