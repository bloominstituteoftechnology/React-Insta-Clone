import React from 'react';
import PropTypes from 'prop-types';
import "./post.css";
import openHeart from "../images/Large-Heart.png";
import closeHeart from '../images/Large-Heart-Red.png';
import CommentContainer from '../CommentSection/CommentContainer';

function PostContainer(props){
    return (
        <div className='post-content-container'>

            {/* Post Header Container */}
            <div className='post-header-container'>
                <img className='profileImage' src={props.arg.thumbnailUrl} alt="userProfileImage"/>
                <p className='userName'>{props.arg.username}</p>
            </div>

            {/*  Post Image Container */}
            <div className='post-image-content'>
                <img src={props.arg.imageUrl} alt=""/>
            </div>

            {/* Below Post Image Container */}
            <div className='below-post-container'>
                {/* Post Engagement Container */}
                <div className='post-engagement-container'>
                    <div>
                        <div onClick={() => {props.liked(props.arg.username)}}>
                            <img src={`${props.arg.heartToggle === true ? `${closeHeart}` : `${openHeart}`}`} alt="heartIcon"  />
                        </div> 
                        <p><span>{props.arg.likes}</span> likes</p> 
                    </div>                
                    <img className='far fa-comment' src="#" alt="commentIcon"/>
                </div>

                {/* Post Comment Container */}
                <div className='post-comment-container'>
                    <CommentContainer com={props.arg.comments} key={props.arg.imageUrl} postid={props.arg.imageUrl} />
                </div>
            </div>
        </div>
        
    );
}

PostContainer.propType = {
    arg: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.likes,
        username: PropTypes.username,
        heartToggle: PropTypes.bool,
        comments: PropTypes.shape({
            comment: PropTypes.string,
            username: PropTypes.string,
        }),
    }),
    liked: PropTypes.func,
}

export default PostContainer;