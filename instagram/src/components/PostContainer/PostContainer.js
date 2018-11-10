import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div>
            <img src={props.post.imageUrl} />
            <div>Likes: {props.post.likes}</div>
            <div>By: {props.post.username}</div>
            <CommentsSection 
                comments={props.post.comments}
            />

        </div>
    );
}

export default PostContainer;

// return (
//     <div>
//         {props.data.map(post => (
//             <PostContainer 
//                 key={post.timestamp}
//                 post={post}
//             />
//         ))}
//     </div>        
// );