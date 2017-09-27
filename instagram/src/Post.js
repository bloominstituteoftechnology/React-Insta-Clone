import React from 'react';
import './Styles/Post.css';
import CommentSection from './CommentSection';
import LikeControls from './LikeControls';
import AddComment from './AddComment';


const Post = (props) => {
        return(
            
            <div>
                {props.posts.map((post) => {
                    return(
                        <div key={post.User+post.PostId} className="post">
                            <div className="post-user_block">
                                <img className="user_pic_thumb" src={post.Picture} alt="user"/>
                                <div className="username">{post.User.toUpperCase()}</div>
                            </div>
                            <br/>
                            <br/>
                            <div className="post-image"><img width="100%" height="100%" src={post.Picture} alt="user"/></div>
                            
                            <LikeControls likeCount={post.Likes} commentCount={post.Comments.length} />
                            <CommentSection comments={post.Comments}/>
                            <AddComment post={props.newsFeed} comments={post.Comments} />
                        </div>
                    );
                })}

                
            </div>
        );
}
export default Post;