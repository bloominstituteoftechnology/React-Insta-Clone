import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = (props) => {
        return (
            <div className="postContainer">
                <div className='username-header'>
                    <img src={props.obj.thumbnailUrl} alt='user thumbnail' />
                    <p>{props.obj.username}</p>
                </div>
                <img className="postImage" src={props.obj.imageUrl} alt='' />
                <CommentSection
                    key={props.obj.timestamp}
                    obj={props.obj}
                />
            </div>
        )
}

export default PostContainer;
