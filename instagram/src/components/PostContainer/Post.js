import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';

const PostStyle = styled.div`
    border: 1px solid lightgrey;
    border-radius: 3px;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;

    .header {
    display: flex;
    align-items: center;
    }

    .header img {
        border-radius: 50%;
        width: 5%;
        margin: 10px 2%;
    }

    .header img:hover {
        cursor: pointer;
    }

    .username {
        font-weight: bold;
    }

    .username:hover {
        cursor: pointer;
    }

    .main-image {
        width: 100%;
    }

    .action-buttons {
        display: flex;
    }
`

const Post = (props) => {
    return (
        <PostStyle>
            <div className='header'>
                <img src={props.postData.thumbnailUrl} alt='thumbnail' />
                <div className='username'>{props.postData.username}</div>
            </div>
            <img className='main-image' src={props.postData.imageUrl} alt='post content' />
            <CommentSection postData={props.postData} />
        </PostStyle>
    )
}

export default Post;