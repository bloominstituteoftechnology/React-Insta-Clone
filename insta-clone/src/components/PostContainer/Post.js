import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import FontAwesomeIcon from '@fortawesome/react-fontawesome/index';
import faHeart from '@fortawesome/free-solid-svg-icons/faHeart';
import PropTypes from 'prop-types';
import './PostContainer.css';


const Post = props => {
    // console.log(props.postdata)
    return <div className="post">
        <header className="postHeader">
          <img className="thumbnail" src={props.postdata.thumbnailUrl} alt="" />
          <p>{props.postdata.username}</p>
        </header>
        <img className="postImage" src={props.postdata.imageUrl} alt="" />
        <div className="likeSection">
          <div className="likeCommentIcons">
            <p className="heart">like</p>
            <p className="commentBubble">cmnt</p>
          </div>
          <div className="likeCount">{props.postdata.likes} likes</div>
        </div>
        <CommentSection comments={props.postdata.comments} timestamp={props.postdata.timestamp} commentdata={props.commentdata} />
      </div>;
}

Post.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
}

export default Post;