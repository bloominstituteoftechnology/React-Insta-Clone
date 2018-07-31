import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection'
import './post.css';

const Post = props => {

    return(
        <div className="post">
            <div className="user">
                <div className="username" >{props.post.username}</div> 
                <img className="icon" src={props.post.thumbnailUrl} alt="thumbnail"/>
            </div>
            <img className="mainImg" src={props.post.imageUrl} alt="imagepost"/>
            <div className="likeCommentIcons">
                <i onClick={()=>props.addLike(props.post.username)} className={props.liked ? "fas fa-heart":"far fa-heart"}></i>
                <i className="far fa-comment"></i>
            </div>
            <div className="likes">{props.post.likes} <span>likes</span></div>
            <div className="timestamp">{props.post.timestamp}</div>
            <CommentSection com={props.post} />
            </div>
    )
};

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailurl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
    })

};

export default Post;