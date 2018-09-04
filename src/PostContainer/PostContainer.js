import React from 'react';
import './PostContainer.css'
import moment from 'moment';
import PropTypes from "prop-types";
import heart from '../logos/heart.png';
import comment from '../logos/comment.png';
import bookmark from '../logos/bookmark.png';
import hamburger from '../logos/hamburger-more.png';
import Comment from '../CommentSection/CommentSection';


function PostContainer(props) {
    
    return(
        <div className="post">
            <div className="post-header" >
                <div className="top-section" >
                    <div className="canvas" >
                        <img className="user-img" src={props.userthumbnail}></img>
                    </div>
                    <p className="username" >{props.username}</p>
                </div>
                <div className="posted-pic" ><img src={props.thumbnail} ></img></div>
            </div> 
            <div className="like-comment-img" >
                <div className="heart-comment">
                    <div className="heart"><img src={heart}></img></div>
                    <div className="comment"><img src={comment}></img></div>
                </div>
                
                <div className="bookmark"><img src={bookmark}></img></div>
            </div>
            <div className="likes">{props.likes} likes</div>
            <div className="comment-section" >{props.comments.map(item =><Comment item={item} username={item.username} text={item.text}  />)}</div>
            <div className="moment-section">{moment().startOf('day').fromNow()}</div>
            <div className="comment-form"><form className="what"><textarea className="form" aria-label="Add a comment…" placeholder="Add a comment…" ></textarea><img className="hamburger" src={hamburger}></img></form></div>
        </div>
        

    );
    
}
PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
  };

export default PostContainer;