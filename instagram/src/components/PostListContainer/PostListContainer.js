import React from 'react';
import PostContainer from '../PostContainer/PostContainer.js'
import './PostListContainer.css'

const PostListContainer = ({postData}) => {



    const postList = (!postData.length)
    ? <h3>Loading Posts...</h3>

    :postData.map(post =>{
        return (
            <div key={post.username}>
                <PostContainer post={post} />
            </div>
        )
    })

    return (
        //receives postData from App as Array
        //for each post in postData array send to PostContainer
        <div className="list-container">
            <h3>PostListContainer</h3>
            {postList}
        </div>
    )
}

export default PostListContainer;