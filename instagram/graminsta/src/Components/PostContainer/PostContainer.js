import React from "react"
import CommentSection from "../CommentSection/CommentSection"
import Post from "./Post"
import PropTypes from "prop-types"
import "./PostContainer.css"
import Loader from "react-loader-spinner"

const PostContainer = (props) => {
    if (Object.keys(props.post).length === 0) {
        return <Loader type="Rings" color="#somecolor" height={80} width={80} />
    }
    const newCommentSubmittedHandler = (newCommentText) => {
        props.newPostCommentSubmitted(newCommentText, props.post)
    }

    return (
        <div className="postContainer">
            <Post
                id={props.post.id}
                username={props.post.username}
                thumbnail={props.post.thumbnailUrl}
                image={props.post.imageUrl}
                likes={props.post.likes}
                post={props.post}
                postLiked={props.postLiked}
            />

                <CommentSection
                    newCommentSubmitted={newCommentSubmittedHandler}
                    comments={props.post.comments}
                    timestamp={props.post.timestamp}
                />
        </div>
    )
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                username: PropTypes.string,
                text: PropTypes.string
            })
        )
    })
}

export default PostContainer;