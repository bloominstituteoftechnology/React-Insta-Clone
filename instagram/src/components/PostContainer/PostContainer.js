import React from 'react';
import Post from './Post'
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    return(
        <div className="post-container">
            <div>
                {props.data.map(data => {
                    return(
                        <div className="post-container-border">
                            <Post thumbnail={data.thumbnailUrl} username={data.username} image={data.imageUrl} />
                            <div className="like-comment-icons">
                                <div className="icons">
                                    <i className="far fa-heart fa-2x" onClick={props.increment}></i>
                                    <i className="far fa-comment fa-2x"></i>
                                </div>
                                <span className="likes">1,000,000 likes</span>
                            </div>
                            <CommentSection comments={data.comments} key={data.username} />
                            <div className="time-stamp">2 hours ago</div>
                            <div className="comments-input">
                                <input type="text" placeholder="Add a comment..." />
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}
export default PostContainer;