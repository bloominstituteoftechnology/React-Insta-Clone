import React from 'react'
import CommentSection from './CommentSection'
import './PostContainer.css'


function PostContainer (props) {
    console.log(props)
    const {posts} = props
    return (
        <div>
            {posts.map(post => (
               <div className="card" key={post.id}>
                   <div className="card-profile">
                        <img src={post.thumbnailUrl} alt={post.username} />
                        {post.username}
                   </div>
                   <div className="post-img">
                        <img src={post.imageUrl} alt={post.username} />
                   </div>
                    <div className="card-likes">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                        <p>{post.likes} likes </p>
                    </div>
                     <div className="comments">
                         <CommentSection comments = {post.comments}/>
                    </div>
                </div>
                
            )
            )}
        </div>
    )
}

export default PostContainer