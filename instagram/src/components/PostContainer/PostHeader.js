import React from 'react';
import styled from 'styled-components';


/*
Passed as Props from Post.js

username = {this.state.data.username}
thumbnailUrl = {this.state.data.thumbnailURL}
imageUrl = {this.state.data.imageUrl}
*/
// Styles using 'styled-components'

const PostHeaderContainer = styled.div`
    display: flex;
    border: 1.5px solid #e6e6e6;
    padding-left: 20px;
    margin-top: 30px;
`
const Img = styled.img`
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;
`

const PostHeader = props => {
    return (
        <div>
            <PostHeaderContainer>
                <Img src={props.thumbnailUrl} alt="posting user's profile thumbnail" />
                <h3>{props.username}</h3>
            </PostHeaderContainer>

            
        </div>
    )
}


export default PostHeader