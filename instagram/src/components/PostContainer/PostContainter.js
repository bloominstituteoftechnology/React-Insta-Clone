import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
        return(
                <div key={props.post.username}>
               <h3>{props.post.username}</h3>
                {props.post.comments.map(comment => (
                        <CommentSection comment={comment}/>
                ))}
                </div>
        )
}

export default PostContainer;