import React from 'react'
import './PostContainer.css'
import PropTypes from 'prop-types'

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
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    {/* <i class="far fa-share-square"></i> */}
                </div>
                <div className="right-actions">
                    <i className="far fa-bookmark"></i>
                </div>
            </div>
            <div className="likes">
                {props.post.likes} likes
            </div>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    })
}

export default Post

