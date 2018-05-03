import React from "react";
// import CommentSection from '../CommentSection/CommentSection.js';
import PostImg from './PostImg.js';
import PostUsername from "./PostUsername.js";

const PostContainer = props => {
    console.log("Props", props);
    // return <div>{props.containerProps.map((arrKeys, i) => {

    //     // return (<IgPost key = {i} arrKeys = {arrKeys}/>); //ask Jeff or Thuy about whats happening here
    
    // } )}</div>;
    // <PostContainer containerProps= {dummyData}/>
    return (
        <React.Fragment>
        <PostImg imgSource={ props.imgSource } />
        <PostUsername usernameSource= "hello kitty" />
        </React.Fragment>
    );
        

}
export default PostContainer;