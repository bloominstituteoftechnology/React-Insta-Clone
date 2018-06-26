import React from 'react';
import PostHeader from './PostHeader'
import PostPicture from './PostPicture'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
    return (
        <div>
            {props.postData.map(post => (
                <div>
                    <PostHeader post = {post} />
                    <PostPicture post = {post} />
                    <CommentSection post = {post} />
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