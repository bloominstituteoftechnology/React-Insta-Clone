import React from 'react';
import dummyData from '../../dummyData';

const CommentsSection = props => {
    return <div>
    
    {props.dummyData.map(post=> {
        return (
        <div key={post.comments.username + post.comments.text}>
            {/* anytime we have an array of elements, REACT NEEDS A KEY! for each elem*/}
            <div class="comment-container">
                <span class="user-name">{post.comments.username}</span> 
                <p class="commet"> {post.comments.text}</p>
            </div>
            </div>
        );
      })}
    
    </div>
}


export default CommentSection;