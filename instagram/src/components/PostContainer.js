import React from 'react';
import './PostContainer.css';

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
                                CONTENT FOOTER
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default PostContainer;