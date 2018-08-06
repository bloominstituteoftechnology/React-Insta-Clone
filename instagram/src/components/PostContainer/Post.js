import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserTag=styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const Thumbnail=styled.img`
    width: 30px;
    height: 30px;
    border-radius: 20px;
    margin-left: 2%;
    margin-top: 15px;
    margin-bottom: 15px;
`
const PostImg=styled.img`
    width: 100%;
`
const Icons=styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
`
const Heart=styled.i`
    margin-left: 3%;
`
const Comment=styled.i`
    margin-left: 3%;
`
const Likes=styled.p`
    margin-left: 3%;
    text-align: left;
    font-weight: bold;
`
const Username=styled.p`
    font-weight: bolder;
    margin-left: 2%;
    margin-top: 15px;
    margin-bottom: 15px;
`
const Post=prop=>{
    return (
        <div>
            <UserTag>
            <Thumbnail src={prop.data.thumbnailUrl} alt='thumbnail-img'/>
            <Username>{prop.data.username}</Username>
            </UserTag>
            <PostImg src={prop.data.imageUrl} alt='post-img'/>
            <Icons>
            <Heart className="far fa-heart fa-2x" onClick={()=>{return prop.liked(prop.index)}}/>
            <Comment className="comment fa fa-flip-horizontal">
            <i className="far fa-comment fa-2x"/>
            </Comment>
            </Icons>
            <Likes>{prop.data.likes} likes</Likes>
        </div>
    )
}
Post.propTypes={
    data: PropTypes.object.isRequired
}
export default Post;