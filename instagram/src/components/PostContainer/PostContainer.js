import React from 'react';
import PostHeader from './PostHeader'
import PostPicture from './PostPicture'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
    return (
        <div>
            {props.postData.map(post => (
                <div>
                    <PostHeader 
                        // post = {post}
                        username = {post.username}
                        thumbnailURL = {post.thumbnailUrl}
                    />
                    <PostPicture 
                        // post = {post}
                        imageUrl = {post.imageUrl} 
                        />
                    <CommentSection 
                        post = {post} 
                        comments = {post.comments}
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