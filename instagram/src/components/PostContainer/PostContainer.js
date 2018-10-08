import React from 'react';
import PostHeader from './PostHeader';
import Likes from './Likes';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';

let PostContainer = props => {
    return (
        <div className="post">
            <PostHeader post={props.post}/>
            <img className="postImage" alt="post" src={props.post.imageUrl}></img>
            <Likes post={props.post}/>
            <CommentSection comments={props.post.comments} />
            <p className='timestamp'>{moment(props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
            <input type='text' placeholder="Add a comment..."></input>
        </div>
    )
}

export default PostContainer;