import React from 'react';
import PostHeader from './PostHeader';
import PostPicture from './PostPicture';
import CommentSection from '../CommentSection/CommentSection';
import './postContainer.css';
import styled from 'styled-components';


const IndividualPostContainerStyles = styled.div`
    margin-bottom:55px;
`
const PostContainerStyles = styled.div`
    background-color: #fafafa;
`

const PostContainer = props => {
    return (
        <PostContainerStyles>
        <div>
            {props.postData.map(post => (
                <IndividualPostContainerStyles>
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
                </IndividualPostContainerStyles>
            ))}
        </div>
        </PostContainerStyles>
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