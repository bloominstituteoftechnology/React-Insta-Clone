import React from "react";
// import CommentSection from '../CommentSection/CommentSection.js';
const IgPost= props => {
    return null;
}

const PostContainer = props => {
    console.log("Props", props);
    return <div>{props.containerProps.map((arrKeys, i) => {

        return (<IgPost key = {i} arrKeys = {arrKeys}/>); //ask jeff about whats happening here
    
    } )}</div>;
}
export default PostContainer;