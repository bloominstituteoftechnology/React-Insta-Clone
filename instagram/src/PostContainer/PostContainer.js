import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';


const PostContainer = (props) => {
        return (
            <PostContainerStyle>
                <UsernameHeader>
                    <UsernameImage src={props.obj.thumbnailUrl} alt='user thumbnail' />
                    <UsernameText>{props.obj.username}</UsernameText>
                </UsernameHeader>
                <PostImage className="postImage" src={props.obj.imageUrl} alt='' />
                <CommentSection
                    key={props.obj.timestamp}
                    obj={props.obj}
                />
            </PostContainerStyle>
        )
}

const PostContainerStyle = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const UsernameHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
`;

const UsernameImage = styled.img`
    border-radius: 100px;
    width: 30px;
    height: 30px;
    margin-left: 15px;
`;

const UsernameText = styled.p`
    font-weight: bold;
    font-size: 14px;
    margin-left: 10px;
`;

const PostImage = styled.img`
    width: 100%;
`;

export default PostContainer;
