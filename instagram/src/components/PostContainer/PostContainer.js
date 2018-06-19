import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'
import Post from './Post';

const PostContainer = props => {
return <div>{props.datas.map(data => 
    <div>
        <Post post={data}/>
        <CommentSection comments={data.comments}/>
    </div>)}
</div>
};

export default PostContainer;