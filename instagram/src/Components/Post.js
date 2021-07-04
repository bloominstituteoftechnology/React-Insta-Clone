import React from "react";
import PropTypes from "prop-types";
import "../App.css"
import { Images, Thumbnail, Username, Top } from "./Styles"

const Post = props => {
    return (
       <Images>
            <Top>
            <Thumbnail src={props.thumbnail}></Thumbnail>
           <Username>{props.username}</Username> 
           </Top>
            <img src={props.image} />
         </Images>
    )
}

export default Post;