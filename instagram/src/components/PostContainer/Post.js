import React from 'react';
import styled from 'styled-components';

const PostHeader = styled.div`
    display: flex;
    padding: 10px 20px;
`
const Icons = styled.div`
    padding-left: 20px;
    margin: 10px 0;
    width: 70px;
    display: flex;
    justify-content: space-between;
`
const Likes = styled.span`
    font-weight: bold;
    padding-left: 20px;
`
const HeadName = styled.span `
    display: flex;
    align-items: center;
    font-weight: bold;
`

const Post = props => {
    return (
        <div className = "post-content">
            <PostHeader>
                <img className = "thumb-img" src = {props.thumbImg}/>
                <HeadName>{props.name}</HeadName>
            </PostHeader>
            <div className = "post">
                <img className = "main-img" src = {props.mainImg}/>
                <Icons>
                    <i className = "far fa-heart fa-2x" onClick= {props.handleAddLike}></i>
                    <i className = "far fa-comment fa-2x fa-flip-horizontal"></i>
                </Icons>
                <Likes>{props.likes} likes</Likes>
            </div>
        </div>
    )
}

export default Post