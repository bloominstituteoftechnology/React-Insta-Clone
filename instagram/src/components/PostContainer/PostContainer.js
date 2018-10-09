import './PostContainer.css';
import React from 'react';
import PropType from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHeart);
library.add(faCommentAlt);

const PostContainer = (props) => { 

    return (
        <div>
        
            {props.dummyData.map(profile => {
                return (
                <div className="post-container">
                    <div className = 'post-header'>
                        <img className="post-profile-img" src={`${profile.thumbnailUrl}`}/>
                        <p className='username bold-txt'>{profile.username}</p>
                    </div>
                    <img className="post-img"src={`${profile.imageUrl}`}/>
                    <div className='like-container'>
                        <div className="icon-cont">
                            <FontAwesomeIcon icon="heart" />
                            <FontAwesomeIcon icon="comment-alt" />
                        </div>
                        <div className='bold-txt'>{profile.likes} likes </div>
                    </div>
                    <CommentSection comments={profile.comments}/>

                </div>
                
                )})}
        
        </div>
    )

}



export default PostContainer;