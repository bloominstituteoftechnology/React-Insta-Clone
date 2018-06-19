import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'

const PostContainer = props => {
return <div>{props.datas.map(data => 
    <div>
        <div className="insta-top">
            <img src={data.thumbnailUrl} alt={data.username} />
            <h1>{data.username}</h1>             
        </div>
        <img className="insta-pic" src={data.imageUrl} alt={data.username} />
        <div className="below-insta-pic">
            <i class="far fa-heart" style={{ fontSize: '35px' }}></i>
            <i class="far fa-comment" style={{ fontSize: '35px' }}></i>
        </div>
        <div>
            {data.likes} likes
        </div>
        <CommentSection comments={data.comments}/>
    </div>)}
</div>
};

export default PostContainer;