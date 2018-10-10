import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import InstaComment from "../../img/insta_comment.png";
import InstaLike from "../../img/insta_strokeHeart.png";
import './PostContainer.css';


const Post = props => {
    // console.log(props.postdata)
    return <div className="post">
        <div className="postHeader">
          <img className="thumbnail" src={props.postdata.thumbnailUrl} alt="" />
          <p>{props.postdata.username}</p>
        </div>
        <img className="postImage" src={props.postdata.imageUrl} alt="" />
        <div className="likeSection">
          <div className="likeCommentIcons">
            <img className="instaLike" src={InstaLike} alt='' />
            <img className="instaComment" src={InstaComment} alt='' />
          </div>
          <div className="likeCount">{props.postdata.likes} likes</div>
        </div>
        <CommentSection comments={props.postdata.comments} timestamp={props.postdata.timestamp} username={props.username} commenttext={props.commenttext} />
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