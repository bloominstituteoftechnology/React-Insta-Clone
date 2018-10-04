import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PostHeader from './PostHeader'
import './PostContainer.css'
import PropTypes from 'prop-types'


const PostContainer = props =>{

    return (
        <div>
 {props.dummyData.map((data) =>
        <div className= "post-container" key={Math.random().toString() * 2}>
                    <PostHeader key={data.username} username={data.username} thumbnail={data.thumbnailUrl}  />
                    <CommentSection key={data.likes.toString()} user={data.username} comments={data.comments} likes={data.likes}
                    image={data.imageUrl} />
                </div>
        )}
        </div>

    )
}

PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        thumbnail: PropTypes.image,
        key: PropTypes.string

    })).isRequired
}
export default PostContainer