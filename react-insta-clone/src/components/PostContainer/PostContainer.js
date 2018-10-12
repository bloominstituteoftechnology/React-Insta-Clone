import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from '../PostContainer/PostHeader'
import PostImage from '../PostContainer/PostImage'
import './PostContainer.css';

const PostContainer = (props) => {
    return (        
        <div className='post-container'>
           {props.posts.map((post) => {
               return (
                   <div>
                        <PostHeader 
                            thumbNail={post.thumbnailUrl}
                            username={post.username}
                            key={Date.now()}
                        />
                        <PostImage 
                            image={post.imageUrl}
                            
                        />
                        <CommentSection
                            likes={post.likes}
                            comments={post.comments}                            
                        />
                   </div>
               )
           })}            
        </div>
    )
}

export default PostContainer;

