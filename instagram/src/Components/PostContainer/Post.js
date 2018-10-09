import React from 'react'
import './PostContainer.css'

const Post = props => {
    return (
        <div className="post">
            <div className="user">
                <div className="user-photo">
                    <img src={props.post.thumbnailUrl} alt=""/>
                </div>
                <div className="user-name">
                    {props.post.username}
                </div>
            </div>
            <div className="image">
                <img src={props.post.imageUrl} alt=""/>
            </div>
            <div className="post-actions">
                <div className="left-actions">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                    {/* <i class="far fa-share-square"></i> */}
                </div>
                <div className="right-actions">
                    <i class="far fa-bookmark"></i>
                </div>
            </div>
            <div className="likes">
                {props.post.likes} likes
            </div>
        </div>
    )
}

export default Post

