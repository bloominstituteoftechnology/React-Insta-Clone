import React from 'react';
import Comment from './Comment';

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
                <img src={props.thumbnailUrl} alt={props.username} />
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

export default PostContainer;