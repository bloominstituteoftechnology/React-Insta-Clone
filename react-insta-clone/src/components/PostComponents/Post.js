import React from "react";
import CommentSection from "../CommentComponents/CommentSection";
import styled from 'styled-components';

const PostCard = styled.div`
    border: 1px solid lightgray;
    margin-bottom: 50px;
`;

const CardHeader = styled.div`
    display: flex;
    padding: 10px;
`;

const CardInfo = styled.div`
    padding: 10px;
`;

const UserThumbnail = styled.img`
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;

const UserPost = styled.img`
    width: 100%;
`;

const SocialIcons = styled.i`
    font-size: 24px;
    padding: 0 5px;
`;

const Post = props => {
    return (
        <PostCard>
            <CardHeader>
            <UserThumbnail src={props.newPost.thumbnailUrl} alt="thumbnail"/>
            <p><b>{props.newPost.username}</b></p>
            </CardHeader>

            <UserPost src={props.newPost.imageUrl} alt="post" />

            <CardInfo>
            <SocialIcons className="far fa-heart" onClick={() => props.increment(props.newPost.imageUrl)}></SocialIcons>
            <SocialIcons className="far fa-comment"></SocialIcons>
            <p><b>{props.newPost.likes} likes</b></p>
            <CommentSection
            comments={props.newPost.comments}
            timestamp={props.newPost.timestamp}
             />
             </CardInfo>
        </PostCard>
      )
}

export default Post;