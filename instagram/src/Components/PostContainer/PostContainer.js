import React from 'react';
import Comment from '../CommentSection/Comment';
import './post.css';

import PropTypes from 'prop-types';


/*
username 
thumbnailUrl
imageUrl
likes
timestamp
// Comments info
comments: [
      {
        username
        text
*/

const PostContainer = (props) => {
    return (
        <div className='post-container'>
            <div className='post-header'>
                <img className='thumbnail' src={props.thumbnailUrl} alt={props.username} />
                <p>{props.username}</p>
            </div>
            <img src={props.imageUrl} />
            <div className='likes-section'>
                {/*Get images for the likes*/}
                <img />
                <img />
                <p>{props.likes} likes</p>
            </div>
            <>
            {props.comments.map(item => {
                return (
                    <Comment 
                    username={item.username} 
                    text={item.text}
                    />
                )
            })}
            </>
        </div>
    )
}

/* PropTypes data type enforcement */
PostContainer.propTypes = {
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })
    ).isRequired,
};
export default PostContainer;