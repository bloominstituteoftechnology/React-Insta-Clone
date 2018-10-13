import React from 'react';
import PostContainer from '../PostContainer/PostContainer.js'
import './PostListContainer.css'
import PropTypes from 'prop-types';

//Receives Post Data array from App.js
const PostListContainer = ({postData, addComment}) => {
    const postList = (!postData.length)
    ? <h3>Loading Posts...</h3>

    :postData.map(post =>{
        return (
            <div key={post.username}>
                <PostContainer post={post} addComment={addComment} />
            </div>
        )
    })

    return (
        //receives postData from App as Array
        //for each post in postData array send to PostContainer
        <div className="list-container">
            {postList}
        </div>
    )
}

PostListContainer.propTypes = {
    postData : PropTypes.arrayOf(
        PropTypes.shape({
            comments: PropTypes.array.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            timestamp: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired
        })
    )
}




export default PostListContainer;