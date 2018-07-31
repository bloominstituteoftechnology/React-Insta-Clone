import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js'

const PostContainer = props => {
    return ( 
        <div>
        {props.data.map(post => {
          return (
          <div className="PostContainer"
            username={post.username}
            avatar={post.thumbnailUrl}
            image={post.imageUrl}
            likes={post.likes}
            timestamp={post.timestamp} >

            <div className="postTop">
            <div>{post.username}</div>
            <img className="avatar" src={post.thumbnailUrl} />
            </div>
            
            <img src={post.imageUrl} />
            <div className="postBot"></div>
            <div>{post.likes}</div>
            <div>{post.timestamp}</div>
            <CommentSection comments={post.comments}  />
         </div>
         )
        })}

</div>
)};
 
export default PostContainer;