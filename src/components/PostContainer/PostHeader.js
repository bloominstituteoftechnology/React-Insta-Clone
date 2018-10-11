import React from 'react';
import Strong from '../Styles/Strong';


const PostHeader = (props) => {
    return (
        <>
            <img src={props.thumbnail} alt="user thumbnail" />
            <Strong type='header'>{props.username}</Strong>
        </>
    )
}

export default PostHeader;