import React from "react";

const PostImg = (props) => {
    console.log(props.imgSource);
    return <img src={props.imgSource} alt="Profile Picture" />
}

export default PostImg;