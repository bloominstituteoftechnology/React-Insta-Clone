import React from 'react';
import styled from 'styled-components'

const PostHeaderStyles = styled.div`
    display:flex;
    justify-content:left;
    align-items: center;
    border-top: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
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
    margin-right:13px;
`

export const UsernameStyles = styled.div`
    font-size:15px;
    font-weight: bold;
`


const PostHeader = props => {
    return (
        <PostHeaderStyles>
            <div className = "post-header">
                <UserThumbnailStyles src = {props.thumbnailURL} alt = "" />
            </div> 
            <div>
                <UsernameStyles>
                    <div>
                        {props.username}
                    </div>
                </UsernameStyles>
            </div>
        </PostHeaderStyles>
        )
    };


export default PostHeader;