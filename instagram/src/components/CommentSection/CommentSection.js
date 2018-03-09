import React from "react";
import "./CommentSection.css"
import { PostContainer } from "../PostContainer/PostContainer.js";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

export const CommentSection = (props) => {
    return(
        <div>
            {console.log("props:", props)}
            {props.comment.map((commentInfo => {
                return (
                    <div>
                        <div>
                        <span class="commentUsername">{commentInfo.username}</span>
                        <span class="commentText">{commentInfo.text}</span>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}