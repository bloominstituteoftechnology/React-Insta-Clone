import React from "react";
import Header from "./header";
import Img from "./img";
import Comments from "../CommentSection/comment";
import PropTypes from "prop-types";
//import "./post.css";
import styled from "styled-components";

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    background-color: whitesmoke;
    width: 100%;
`

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;
    margin: 20px;
    margin-right: 0;
`

//post component creates the header for the user post and passes the comment data to the comments component
const PostPage = (props) => {
    return (
        <>
            <PostHeader>
                <Header post={props.post}/>
            </PostHeader>
            <Img img={props.post}/>
            <CommentContainer>
                <Comments
                    postId={props.post.username}
                    comment={props.post.comments} 
                    likes={props.post.likes} 
                    text={props.text}
                    time={props.post.timestamp}
                    increment={props.increment}
                />
            </CommentContainer>
        </>
    )
}

PostPage.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string,
            })
        )
    }).isRequired 
}

export default PostPage;