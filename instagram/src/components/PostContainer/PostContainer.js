import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';


const PostContainer = props => {
    return (
        <div className='post-container'>
            <PostHeader user={props.user} thumbnail={props.thumbnail}/>
            <img src={props.img} alt=""/>
            <div>
                <i class="far fa-heart fa-2x" /> &emsp; <i class="far fa-comment fa-2x" />
            </div>
            <p className='likes'>{props.likes}</p>
        </div>
    )
}


PostContainer.propTypes = {
    likes: PropTypes.numer,
    

}



export default PostContainer;