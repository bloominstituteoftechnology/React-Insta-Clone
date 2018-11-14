import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import "./post.css";

function PostContainer(props){
    return (
        <div className='post-content-container'>

            <div className='post-header-container'>
                <img className='profileImage' src={props.arg.thumbnailUrl} alt="userProfileImage"/>
                <p className='userName'>{props.arg.username}</p>
            </div>

            <div className='post-image-content'>
                <img src={props.arg.imageUrl} alt=""/>
            </div>

            <div className='below-post-container'>
                <div className='post-engagement-container'>
                    <div>
                        <div onClick={() => {props.liked(props.arg.username)}}>
                        {console.log(props.arg.heartToggle)}
                            <img className={`${props.arg.heartToggle === true ? `fas fa-heart` : `far fa-heart`}`} src="#" alt="heartIcon"  />
                        </div> 
                        <p><span>{props.arg.likes}</span> likes</p> 
                    </div>                
                    <img className='far fa-comment' src="#" alt="commentIcon"/>
                </div>

                <div className='post-comment-container'>
                    {props.arg.comments.map( (com, index) => (
                        <CommentSection com={com} key={`${props.arg.username}`+index}/>
                        )                  
                    )}
                </div>

                <div className='add-comment-container'>
                    <input type="text" placeholder='Add a comment . . .'/>
                </div>
            </div>
        </div>
        
    );
}

PostContainer.prototype = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.likes,
        username: PropTypes.username,

    })
}

export default PostContainer;