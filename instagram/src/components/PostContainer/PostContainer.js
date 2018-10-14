import React from 'react';
import styles from './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js'

const PostContainer=(props)=>{
    const posts=props.posts.slice();
    return(
        <div>
            {posts.map((post)=>{
                return(
                    <div class="big-container">
                        <div class="topofpic">
                    <img src={post.thumbnailUrl} class="circle"/>
                    <div class="username"> {post.username}</div>
                    
                    </div>
                        <div class="main-image">
                            <img src={post.imageUrl}/>

                        </div>
                    <CommentSection comments={post.comments} likes={post.likes} id={post.timestamp}/>
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