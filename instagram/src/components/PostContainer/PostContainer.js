import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import './PostContainer.css'


const PostContainer = ({post}) => {
    console.log(post);
    let likes = 0;

    return (

        //receives individual post of postData array from
        //PostContainerList
        //render a post to UI, pass comment to CommentSection
        // <CommentSection />
        <div className="post">
            <h4>{post.username}</h4>
            <img src={post.imageUrl} alt="{post.username} advert"/>
            <div className="like-icons">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </div>
            <p className="likes">{likes} likes</p>
            <CommentSection comments={post.comments}/>
        </div>
    )
}

export default PostContainer;