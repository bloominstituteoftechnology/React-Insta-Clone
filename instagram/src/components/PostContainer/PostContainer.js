import React from "react";
import "./PostContainer.css";
import { CommentSection } from "../CommentSection/CommentSection.js";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

export const PostContainer = (props) => {
    return (
        <div class= "topCard row">
            {props.post.map((usrInfo => {
                return(
                    <div class= "bodyCard col-md-4">
                        <Card>
                            <CardBody>
                                <img class="thumbnail rounded-circle" src={usrInfo.thumbnailUrl}></img>
                                {usrInfo.username}
                            </CardBody>
                            <CardImg top-width="100%" src={usrInfo.imageUrl} />
                            <CommentSection comment = {usrInfo.comments} />
                        </Card>
                    </div>
                )
            }))}
        </div>
     ) 
}


