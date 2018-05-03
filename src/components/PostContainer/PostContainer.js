import React from 'react';
import dummyData from '../../dummyData';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {

    const post = props.post;

        return (
        <div key={post.username + post.thumbnailUrl + post.imageUrl + post.likes + post.timestamp}>
            {/* anytime we have an array of elements, REACT NEEDS A KEY! for each elem*/}
            <div class="post-container">
                <div class="post-top">
                <span class="user-name1">{post.username}</span> 
                <img class="thumb-nail" src={post.thumbnailUrl}/> 
                </div>
                <img class="image-post" src={post.imageUrl}/>
                <div class="post-bottom">
                <span class="likes">{post.likes} likes</span>
                </div>
                <CommentSection comments={post.comments}/>
                <span class="time">{post.timestamp}</span>
            </div>

        </div>
    );
}
    



export default PostContainer;