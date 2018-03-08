import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


export const PostContainer = (props) => {
    return (
        <div>
            <div>
                <img src={props.data.thumbnailUrl} alt="thumbnail"></img>
                <h4 >{props.data.username}</h4>
            </div>
                <img src={props.data.imageUrl} alt={"post image by" + props.data.username}></img>
                <CommentSection comments={props.data.comments} />
        </div>
    )
}
export default PostContainer;