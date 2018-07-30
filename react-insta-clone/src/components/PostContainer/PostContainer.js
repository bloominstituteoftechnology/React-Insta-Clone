import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

const PostContainer = props => {
    console.log('containerProps', props.posts);
    return (
        <div>
             {props.posts.map(post => (
                 <div>
                    <PostHeader 
                        username={props.posts.username}
                        thumbnailUrl={props.posts.thumbnailUrl}
                    /> 
                    {post.likes} Likes
                    <CommentSection />
                </div>
             ))}
        </div>
    );
};

export default PostContainer;