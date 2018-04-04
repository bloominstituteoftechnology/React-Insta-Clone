import React from 'react';
import CommentSection from './components/CommentSection/CommentSection';

const PostContainer = (props) => {
    console.log(props.dummy);
    return (
        <div>
            {props.dummy.map(post => (
                <div>
                    <CommentSection comments={post.comments}/>
                </div>                
            ))}
        </div>
    );
}








export default PostContainer