import React from 'react';
import CommentSection from './CommentSection/CommentSection';
import {PostContainer, PostHeader, PostHeaderThumbnail, BigImage, CommentsContainer, InteractiveButtonsContainer, LikesInfo, OverallHolder} from './PostStyle';
import { PostUserName } from '../StylesReusable';

const Post= props => { 
    return (
        <OverallHolder>
            {props.dummyData.map((info,index) => {
                return (
                <PostContainer>
                    <PostHeader>
                        <PostHeaderThumbnail src = {info.thumbnailUrl} alt = 'thumbnail'/>
                        <PostUserName>{info.username}</PostUserName>
                    </PostHeader>
                    <BigImage src = {info.imageUrl} alt = 'post-image'/>

                    <CommentsContainer>
                        <InteractiveButtonsContainer>
                                <i onClick = {event => {
                                    props.counter(event,index);
                                }} class="far fa-heart"></i>
                            <LikesInfo>{info.likes} likes</LikesInfo>
                        </InteractiveButtonsContainer>
                        <CommentSection comments={info.comments}/> 
                    </CommentsContainer> 
                </PostContainer>
                );
            })}
        </OverallHolder>
        
    );
}

export default Post;