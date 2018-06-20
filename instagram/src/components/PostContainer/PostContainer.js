import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'
import Post from './Post';

const PostContainer = props => {
return <div>{props.datas.map(data => 
    <div className="individual-post">
        <Post
        key={data.imageUrl}
        post={data}
        />
        <CommentSection 
        newValue={props.newValue} 
        addComment={props.addComment} 
        addNewComment={props.addNewComment} 
        comments={data.comments}
        />
    </div>)}
</div>
};

export default PostContainer;