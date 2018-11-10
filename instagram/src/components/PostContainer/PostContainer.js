import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';

const PostContainer = props => {
    return (
        <div>
            
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