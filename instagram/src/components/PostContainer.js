import React from 'react';
import './PostContainer.css';
import heartIcon from '.././assets/Instagram-Heart.png';
import commentBubbelIcon from '.././assets/Instagram-CommentBubbleIcon.png';
import CommentSection from './CommentSection';
// import CommentsSecFooter from './CommentsSecFooter.js';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    return (
        <div className="app-border">
            {props.instaData.map(user => {
                return (
                    <div className= "postcontainer-wrapper" key= {user.username}>
                    {/* PostContainer Header Section Start */}
                        <div className= "postContainer-header">
                            <img className= "postContainer-header-img" src={user.thumbnailUrl} alt= "userProfileImg" width="50px"></img>
                            <p className="postContainer-header-user">{user.username}</p>
                        </div>
                    {/* PostContainer Header Section End */}

                    {/* PostContainer Post Content Section Start */}
                        <div className= "post-content-wrapper-main">
                        <div className= "post-content-wrapper" key={user.username}>
                            <div className= "post-content-body">
                                <img className= "post-content-body-img" src={user.imageUrl} alt= "userPostImg" width="700px"></img>
                            </div>

                            {/* PostContainer Post Content Footer Section Start */}
                            <div className= "post-content-footer">
                                <div className= "post-nav">
                                    <div className="post-nav-icons">
                                        <img className= "post-nav-heartIcon" alt="heartIcon" src= {heartIcon} width = "30px" height ="30px"></img>
                                        <img className= "post-nav-TextBubbelIcon" alt= "TextBubbelIcon" src= {commentBubbelIcon} width = "30px" height ="30px"></img>
                                    </div>
                                    <div className="post-nav-likes">
                                        <p className= "post-nav-total-likes">{user.likes} likes</p>
                                    </div>
                                </div>
                            </div >
                            {/* PostContainer Post Content Footer Section end */}

                            {/* PostContainer Comment Section Start */}
                            <div className="comment-section-wrapper">
                                {/* <CommentSection comments = {user.comments} /> */}
                                <p className='timestamp'>{user.timestamp}</p>
                                <hr></hr>
                                <input className="addComment" placeholder="Add a comment..." />
                                {/* <CommentsSecFooter commentsSecFooter = {user.timestamp} />  */}
                            </div>
                        </div>
            </div>
        </div>
                     

                     
                )
            })}


        </div>
    )
}

PostContainer.propTypes = {
    username: PropTypes.string.isRequired, 
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default PostContainer;
