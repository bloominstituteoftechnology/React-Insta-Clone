import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/commentsection';


const Post = props =>{

    return(
        <div className= 'post'>
            <div className='postheader'>
                <img className='profile-pic' src ={props.post.thumbnailUrl} alt='user profile' />
                <h3 className='user-name'>{props.post.username}</h3>
            </div>
            <div className='imgpost'>
                <img className='large-img-post' src={props.post.imageUrl} />
            </div>
            <div className='icons-likes-comments'>
                <div className='icons-comment'>
                    <div className="icons-c">
                        <i className="fa fa-heart" />
                    </div>
                    <div className="icons-c">
                        <i className="fa fa-comment" />
                    </div>
                </div>
            <div className ='likes'>
                <p>{props.post.likes} likes</p>
            </div>
            <div className='comment-section'>
                <CommentSection comments={props.post.comments}/>
            </div>
            </div>
        </div>
    )
}






export default Post;