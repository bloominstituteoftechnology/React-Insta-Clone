import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import uuid from 'uuid';
import AddComment from './CommentSection/AddComment';

export default function PostContainer (prop) {
    return (
        prop.posts.map(post => {
            <div
          className='post'
        >
            <img className='thumbnail' src={post.thumbnailUrl}/> {post.userName}
            <img className='post-image' src={post.imageUrl}/>
            {/* Enter fa-icons for like here */}
            <p>{post.likes} likes</p>

            <CommentSection
                comments={post.comments}
            />

            <AddComment
             username={post.username}
             onChange={prop.commentChange}
             onClick={prop.addComment}
             />
            
        </div>
        })
        
    )
}