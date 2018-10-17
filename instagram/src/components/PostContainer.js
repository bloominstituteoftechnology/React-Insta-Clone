import React from 'react';
import './PostContainer.css';
import heartIcon from '.././assets/Instagram-Heart.png';
import commentBubbelIcon from '.././assets/Instagram-CommentBubbleIcon.png';

const PostContainer = (props) => {
    return (
        <div>
            {props.instaData.map(user => {
                return (
                    <div className= "postcontainer-wrapper" key= {user.username}>
                        <div className= "postContainer-header">
                            <img className= "postContainer-header-img" src={user.thumbnailUrl} alt= "userProfileImg" width="50px"></img>
                            <h4 className="postContainer-header-user">{user.username}</h4>
                        </div>
                     </div>
                )
            })}

            <div>
                {props.instaData.map(post => {
                    return (
                        <div className= "post-content-wrapper" key={post.username}>
                            <div className= "post-content-body">
                                <img className= "post-content-body-img" src={post.imageUrl} alt= "userPostImg" width="700px"></img>
                            </div>
                            <div className= "post-content-footer">
                                <div className= "post-nav">
                                    <div className="post-nav-icons">
                                        <img className= "post-nav-heartIcon" alt="heartIcon" src= {props.instaData} src= {heartIcon} width = "30px" height ="30px"></img>
                                        <img className= "post-nav-TextBubbelIcon" alt= "TextBubbelIcon" src= {commentBubbelIcon} width = "30px" height ="30px"></img>
                                    </div>
                                    <div className="post-nav-likes">
                                        <h4 className= "post-nav-total-likes">{post.likes} likes</h4>
                                        <h4 className= "post-nav-total-like-copy"></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default PostContainer;