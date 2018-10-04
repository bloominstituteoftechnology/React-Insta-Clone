import React from 'react';
import PostContainer from '../PostContainer/PostContainer.js'
import './PostListContainer.css'

const PostListContainer = ({postData}) => {
    console.log(postData);
    const postList = postData.map(post =>{
        console.log(post);
        return <PostContainer post={post} />
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