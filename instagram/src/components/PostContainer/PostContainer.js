import React from 'react';
import PostTitle from './PostTitle';
import PostImage from './PostImage';
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'


const PostContainer = props => {
    return (
       <div>
          {props.posts.map(post => 
          <div>
           <PostTitle thumbnail={post.thumbnailUrl} username={post.username} />
           <PostImage image={post.imageUrl} />
           <div class="more-icons">
            <button className="heart-icon"><img src="data:image/png;base64,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" alt="heart" /></button>
            <button className="comment-icon"><img src="https://image.freepik.com/free-icon/comment-bubble-outline_318-27591.jpg" alt="comment" /></button>
           </div>
           <h2 className="likes">{post.likes} likes</h2>
           <CommentSection comments={post.comments}/>
           <h5 className="date">{post.timestamp}</h5>
           </div>
           
           )}
        </div>
        
    )
}


export default PostContainer;



