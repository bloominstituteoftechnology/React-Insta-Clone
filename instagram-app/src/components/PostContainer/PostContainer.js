import React from 'react'
import './PostContainer.css'
import Comments from '../Comments/Comments'

const PostContainer = (props) => {
    return (
        <div className="post__container">
            {props.posts.map(post => {
                return(
                    <div className="post" key={post.id}>
                        <div className="post-header">
                        <h2 className="post-username">{post.username}</h2>
                        <img className="post-userimg" src={post.thumbnailUrl} alt={post.username}/>
                        </div>
                        <img className="post-img" src={post.imageUrl} alt={post.username}/>
                        <div className="post-icons">
                            <i className="far fa-heart"></i>
                            <i className="far fa-comment"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                        <p className="post-like">{post.likes} likes</p>
                        <p className="post-time">{post.timestamp}</p>
                        <Comments 
                        comments={post.comments}
                        id={post.id}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer