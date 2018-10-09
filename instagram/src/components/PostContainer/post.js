import React from 'react';

import CommentSection from '../CommentSection/commentsection';


const Post = props =>{

    return(
        <div>
            <div className='postheader'>
                <img className='profile-pic' src ={props.post.thumbnailUrl} alt='user profile' />
                <h3>{props.post.username}</h3>
            </div>
            <div className='imgpost'>
                <img className='large-img-post' src={props.post.imageUrl} />
            </div>
            <div className ='likes'>
                <p>{props.post.likes} likes</p>
            </div>
            <div className='comment-section'>
                <CommentSection comments={props.post.comments}/>
            </div>
        </div>
    )
}






export default Post;