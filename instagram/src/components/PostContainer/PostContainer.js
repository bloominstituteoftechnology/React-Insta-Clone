import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
return <div>{props.datas.map(data => 
    <div>
        <div>
            <img src={data.thumbnailUrl} />
            <h1>{data.username}</h1>             
        </div>
        <img src={data.imageUrl} />
        <CommentSection comments={data.comments}/>
    </div>)}
</div>
};

export default PostContainer;