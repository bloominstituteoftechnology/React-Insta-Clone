import React from 'react';
import styled from 'styled-components'

const PostHeaderStyles = styled.div`
    display:flex;
    justify-content:left;
    align-items: center;
    border-top: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
    width:613px;
    margin-left:auto;
    margin-right:auto;
    padding-top:12px;
    padding-bottom:12px;
`
const UserThumbnailStyles = styled.img`  
    width: 30px;
    border-radius:50%;
    margin-left:13px;
`

const UserNameStyles = styled.div`
    font-size:15px;
    font-weight: bold;
    margin-left:12px;
`


const PostHeader = props => {
    return (
        <PostHeaderStyles>
            <div className = "post-header">
                <UserThumbnailStyles src = {props.thumbnailURL} alt = "" />
            </div> 
            <div>
                <UserNameStyles>
                    <div>
                        {props.username}
                    </div>
                </UserNameStyles>
            </div>
        </PostHeaderStyles>
        )
    };


export default PostHeader;