import React from 'react';
import './Post.css';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import CommentsContainer from '../CommentSection/CommentsContainer';
const PostContainer = (props) => {
    return (
        <div className='post-container'>
            <PostHeader
                thumbnail={props.data.thumbnailUrl}
                username={props.data.username} />
            <PostContent
                picture={props.data.imageUrl}
                likes={props.data.likes}
            />

           <CommentsContainer comments={props.data.comments}/>
        </div>
    );
}


export default PostContainer;