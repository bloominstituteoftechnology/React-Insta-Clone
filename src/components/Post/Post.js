import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserName from '../../stylesReusables';


const UserThumbnail=styled.img`
border-radius:50%;
   
margin-top:1rem;
margin-bottom:1rem;
margin-left:1rem;
margin-right:1rem;
height: 57px;
width: 8%;
`

// const UserName=styled.div`
// font-weight:bold
// `


const Post=(props)=>{
const post=props.post;
    return(
        <div>
    <div class="topofpic">
                   
                    <UserThumbnail src={post.thumbnailUrl}/>
                   
                    <UserName> {post.username}</UserName>
                    
                    </div>
                        <div class="main-image">
                            <img src={post.imageUrl}/>

                        </div>
                        </div>
    )
}

Post.propTypes={
    post: PropTypes.shape({
        username: PropTypes.string,
        imageUrl: PropTypes.string
    })
}


export default Post;