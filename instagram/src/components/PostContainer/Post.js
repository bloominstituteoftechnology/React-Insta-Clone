import React, { Component } from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';




const Post = props => {

    return(
        <div className='post-img'>
            <div className='post-header'> 
                <img src={props.data.thumbnailUrl}/>
                <h3>{props.data.username}</h3>
            </div>
            <img src={props.data.imageUrl} />
            <div className='likes'>
            <div className='icons'><h1 onClick={props.addLike} id={props.id}>♡</h1><h1 className='comment'>🗨️</h1></div>
                
                <p>{props.data.likes} likes</p>
            </div>
            
        </div>
    );
}

Post.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username:PropTypes.string,
            text: PropTypes.string,
        }))
    })
}

export default Post;