import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const PostContainerDiv = styled.div `
    border-bottom: 1px solid lightgrey;
    margin: 20px;
`

const PostUser = styled.div `
    display: flex;
    margin: 10px;
`
const PostUserImg = styled.img `
    width: 9%;
    height: 9%;
    border-radius: 50%;
`

const PostUserHeader = styled.h2 `
    font-size: 13px;
    margin-left: 10px;
`

const PostImage = styled.img `
    width: 100%;
`

function Post(props) {
    return (
        <PostContainerDiv>
            <PostUser>
                <PostUserImg src={props.postProps.thumbnailUrl} alt="" />
                <PostUserHeader>{props.postProps.username}</PostUserHeader>
            </PostUser>
            <PostImage id="PostImage" src={props.postProps.imageUrl} alt="" />
            {/* icons used to be here */}

            <CommentSection likes={props.postProps.likes} comments={props.postProps.comments} />
        </PostContainerDiv>
    )
}

Post.propTypes = {
    postProps: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.object),
    })
}

export default Post;