import React from 'react';
import PostHeader from './PostHeader';
import {IndvPost, StyledImg} from '../Styles/Styles';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (

        <div>
        <IndvPost>
            <PostHeader 
            thumbnailUrl={props.post.thumbnailUrl}
            username={props.post.username}
            />

            <div>
                <StyledImg
                alt='thumbnail'
                src={props.post.imageUrl}
                />
            </div>

            <CommentSection 
            timestamp={props.post.timestamp}
            likes={props.post.likes}
            comments={props.post.comments}
            />
        </IndvPost>
            </div>
    )
}


export default Post;