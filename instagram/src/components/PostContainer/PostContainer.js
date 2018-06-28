import React from 'react';
import PostHeader from './PostHeader'
import PostPicture from './PostPicture'
import CommentSection from '../CommentSection/CommentSection'
import './postContainer.css'

const PostContainer = props => {
    return (
        <div>
            {props.postData.map(post => (
                <div>
                    <PostHeader 
                        username = {post.username}
                        thumbnailURL = {post.thumbnailUrl}
                    />
                    <PostPicture 
                        imageUrl = {post.imageUrl} 
                    />
                    <CommentSection 
                        comments = {post.comments}
                        numberOfLikes= {post.likes}
                    />
                </div>
            ))}
        </div>
    );
}




// const PostContainer = props => {
//     return (
//         <div>
//             {props.postData.map(post => 
//             {return (
//                     <div>
//                         {post.username}
//                     </div>
//                     )}
//                 )
//         }
//         </div>
//     );
// }

export default PostContainer;