import React from 'react';
import styles from './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';
import Post from '../Post/Post.js'


const PostContainer=(props)=>{
    const posts=props.posts.slice();
    return(
        <div>
            {posts.map((post)=>{
                return(
                    <div class="big-container">
                    <Post post={post}/>
                       
                    <CommentSection comments={post.comments} likes={post.likes} id={post.imageUrl} handleChange={props.handleChange} handleNew={props.handleNew} val={props.val}/>
                        <div class="timestamp">
                        {post.timestamp}
                        </div>
               


                    </div>
                  
                 
                )
            }
            )}
   </div> )

}

export default PostContainer;