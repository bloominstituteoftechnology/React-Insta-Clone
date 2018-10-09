import React from 'react';
import Post from './Post'
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    return(
        <div className="post-container">
            {props.data.map(data => {
                return(
                    <Post thumbnail={data.thumbnailUrl} username={data.username} image={data.imageUrl} />
                );
            })}

            <div className="user-comments">
                {props.data.map(data => {
                    return (
                        <CommentSection comments={data.comments} key={data.username} />
                    );
                })}
            </div>

        </div>
    )
}
export default PostContainer;